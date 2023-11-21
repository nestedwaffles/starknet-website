import {
  Box,
  Container,
  Grid,
  Flex,
  ButtonGroup,
} from "@chakra-ui/react";

import { Button } from "@ui/Button";
import { useMemo,  } from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  Configure,
} from "react-instantsearch-hooks-web";

import type { Topic } from "@starknet-io/cms-data/src/topics";
import { Heading } from "@ui/Typography/Heading";
import { CategoryList } from "@ui/Blog/CategoryList";
import { BlogSection } from "@ui/Blog/BlogSection";
import { NormalizedCategory } from "src/utils/blog";
import qs from "qs";
import { HiFilm, HiOutlineBookOpen, HiPlay } from "react-icons/hi2";
import { TopicList } from "@ui/Blog/TopicsList";
import { InfinitePostsSection } from "@ui/Blog/InfinitePostsSection";

export interface Props extends LocaleProps {
  readonly categories: readonly NormalizedCategory[];
  readonly topics: readonly Topic[];
  readonly params: LocaleParams & {
    readonly category?: string;
  };
  readonly query: {
    readonly topicFilters?: readonly string[];
    readonly postType?: string;
  }
  readonly env: {
    readonly ALGOLIA_INDEX: string;
    readonly ALGOLIA_APP_ID: string;
    readonly ALGOLIA_SEARCH_API_KEY: string;
  };
}

/**
 * `postTypes` constant.
 */

const postTypes = [
  {
    value: 'article',
    label: 'Articles',
    icon: <HiOutlineBookOpen />
  },
  {
    value: 'video',
    label: 'Videos',
    icon: <HiFilm />
  },
  {
    value: 'audio',
    label: 'Audios',
    icon: <HiPlay />
  }
]

/**
 * `CategoryPage` component.
 */

export function CategoryPage({
  env,
  params,
  query,
  categories,
  topics,
}: Props): JSX.Element | null {
  const searchClient = useMemo(() => {
    return algoliasearch(env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY);
  }, [env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY]);

  const category = categories.find(category => 
    category.slug === params.category
  ) as NormalizedCategory;

  const hasChildren = (category?.children?.length ?? 0) > 0;
  

  return (
    <Box pt="18" minH="100vh">
      <Container
        maxW="1344px"
        display={'grid'}
        gridTemplateColumns={'auto  1fr'}
        columnGap={'115px'}
        marginTop={'96px'}
        mb={4}
      >
        <CategoryList categories={categories} params={params} />

        <Flex
          flexDirection={'column'}
        >
          <Grid 
            gridTemplateColumns={'1fr auto'}
            marginBottom={'40px'}
          >
            <Heading
              as={'h1'}
              color={'heading-navy-fg'}
              variant={'h2'}
            >
              {category.name}
            </Heading>

            <ButtonGroup>
              {postTypes.map((postType) => (
                <Button
                  as={'a'}
                  href={`/${params.locale}/posts/${category.slug}?${qs.stringify({
                    ...query,
                    postType: query.postType === postType.value ? '' : postType.value
                  })}`}
                  leftIcon={postType.icon}
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '14px',
                    padding: '14px 24px',
                    borderRadius: '40px',
                    ...!(query.postType === postType.value) && {
                      border: '1px solid rgba(35, 25, 45, 0.1)',
                      background: 'rgba(72, 38, 72, 0.06)',
                      color: 'heading-navy-fg'
                    }
                  }}
                  variant={query.postType === postType.value ? 'solid' : 'outlineRounded'}
                >
                  {postType.label}
                </Button>
              ))}
            </ButtonGroup>
          </Grid>

          <TopicList 
            category={category}
            params={params}
            query={query}
            topics={topics}
          />


          {hasChildren && !query.postType && (
            <Flex
              flexDirection={'column'}
              rowGap={'96px'}
            >
              {category.children.map(category => (
                <InstantSearch
                  searchClient={searchClient}
                  indexName={`web_posts_${env.ALGOLIA_INDEX}`}
                >
                  <Configure
                    hitsPerPage={3}
                    facetsRefinements={{
                      category: [category.id],
                      locale: [params.locale],
                      topic: (query.topicFilters ?? []) as string[]
                    }}
                  />

                  <BlogSection
                    title={category.name}
                    topics={topics as Topic[]}
                    url={`/${params.locale}/posts/${category.slug}`}
                  />
                </InstantSearch>
              ))}
            </Flex>
          )}              

          {!hasChildren && !query.postType && (
            <Flex
              flexDirection={'column'}
              rowGap={'96px'}
            >
              {postTypes.map(postType => (
                <InstantSearch
                  searchClient={searchClient}
                  indexName={`web_posts_${env.ALGOLIA_INDEX}`}
                >
                  <Configure
                    hitsPerPage={3}
                    facetsRefinements={{
                      category: [category.id],
                      locale: [params.locale],
                      post_type: [postType.value],
                      topic: (query.topicFilters ?? []) as string[]
                    }}
                  />

                  <BlogSection
                    title={postType.label}
                    topics={topics as Topic[]}
                    url={`/${params.locale}/posts/${category.slug}?${qs.stringify({
                      postType: postType.value
                    })}`}
                  />
                </InstantSearch>
              ))}
            </Flex>
          )}

          {query.postType && (
            <InstantSearch
              searchClient={searchClient}
              indexName={`web_posts_${env.ALGOLIA_INDEX}`}
            >
              <Configure
                hitsPerPage={50}
                facetsRefinements={{
                  category: [category.id],
                  locale: [params.locale],
                  post_type: [query.postType],
                  topic: (query.topicFilters ?? []) as string[]
                }}
              />

              <InfinitePostsSection
                postType={query.postType as 'article' | 'video' | 'audio'}
                topics={topics as Topic[]}
              />
            </InstantSearch>
          )}
        </Flex>
      </Container>
    </Box>
  );
}

type VideoData = {
  etag: string;
  id: string;
  kind: string;
  snippet: object;
  contentDetails: {
    duration: string;
  }
}

type Video = {
  data: VideoData;
  url: string;
  id: string;
}

export type BlogHit = {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly image: string;
  readonly category: string;
  readonly topic: string[];
  readonly short_desc: string;
  readonly locale: string;
  readonly filepath: string;
  readonly post_type: string;
  readonly published_date: string;
  readonly featured_post: boolean;
  readonly blocks: Array<Block>;
  readonly video: Video;
  readonly timeToConsume: string;
};

interface Block {
  body?: string;
  type?: string;
}
