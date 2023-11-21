import {
  Box,
  Container,
  Flex,
} from "@chakra-ui/react";

import { useMemo } from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  Configure,
} from "react-instantsearch-hooks-web";

import type { Category } from "@starknet-io/cms-data/src/categories";
import type { Topic } from "@starknet-io/cms-data/src/topics";
import { CategoryList } from "@ui/Blog/CategoryList";
import { BlogSection } from "@ui/Blog/BlogSection";
import { FeaturedSection } from "@ui/Blog/FeaturedSection";

export interface Props extends LocaleProps {
  readonly categories: readonly Category[];
  readonly topics: readonly Topic[];
  readonly params: LocaleParams & {
    readonly category?: string;
  };
  readonly env: {
    readonly ALGOLIA_INDEX: string;
    readonly ALGOLIA_APP_ID: string;
    readonly ALGOLIA_SEARCH_API_KEY: string;
  };
}

export function PostsPage({
  env,
  params,
  categories,
  topics,
}: Props): JSX.Element | null {
  const searchClient = useMemo(() => {
    return algoliasearch(env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY);
  }, [env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY]);
  const category = categories.find((c) => c.slug === params.category);

  return (
    <Box pt="18" minH="100vh">
      <InstantSearch
        searchClient={searchClient}
        indexName={`web_posts_${env.ALGOLIA_INDEX}_featured`}
      >
        <Configure
          hitsPerPage={50}
          facetsRefinements={useMemo(
            () => ({
              locale: [params.locale],
              // topic: searchParams.get("topic")?.split(",") ?? [],
              category: category != null ? [category.id] : [],
            }),
            [category, params.locale]
          )}
        />

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
            rowGap={'96px'}
          >
            <FeaturedSection
              topics={topics as Topic[]}
              params={params}
            />

            {categories.map(category => (
              <InstantSearch
                searchClient={searchClient}
                indexName={`web_posts_${env.ALGOLIA_INDEX}`}
              >
                <Configure
                  hitsPerPage={3}
                  facetsRefinements={{
                    category: [category.id],
                    locale: [params.locale]
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
        </Container>
      </InstantSearch>
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
