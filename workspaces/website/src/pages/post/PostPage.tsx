/**
 * Module dependencies.
 */

import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineTwitter
} from "react-icons/ai";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  HStack,
  Heading,
  Icon,
  Img,
  Link,
} from "@chakra-ui/react";

import { Category } from "@starknet-io/cms-data/src/categories";
import { Configure, InstantSearch, useHits } from "react-instantsearch-hooks-web";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

import { Post } from "@starknet-io/cms-data/src/posts";
import { TableOfContents } from "../(components)/TableOfContents/TableOfContents";
import { Text } from "@ui/Typography/Text";
import { Topic } from "@starknet-io/cms-data/src/topics";
import { Block } from "src/blocks/Block";
import { YoutubePlayer } from "@ui/YoutubePlayer/YoutubePlayer";
import { useMemo } from "react";
import { blocksToTOC } from "../(components)/TableOfContents/blocksToTOC";
import moment from "moment";
import qs from "qs";
import algoliasearch from "algoliasearch";
import { BlogCard } from "@ui/Blog/BlogCard";
import { BlogHit } from "../posts/PostsPage";

/**
 * Export `Props` type.
 */

export interface Props {
  readonly params: LocaleParams & {
    readonly slug: string;
  };
  readonly categories: readonly Category[]
  readonly topics: readonly Topic[]
  readonly post: Post
  readonly env: {
    readonly ALGOLIA_INDEX: string;
    readonly ALGOLIA_APP_ID: string;
    readonly ALGOLIA_SEARCH_API_KEY: string;
    readonly SITE_URL: string;
  };
}

/**
 * Export `MarkdownBlock` type.
 */

export interface MarkdownBlock {
  readonly type: "markdown";
  readonly body: string;
}

/**
 * Export `Page` component.
 */

export function Page(props: Props): JSX.Element {
  const { params: { slug, locale }, categories, topics, post, env } = props;
  const category = categories.find((c) => c.id === post.category)!;
  const videoId = post.post_type === "video" ? post.video?.id : undefined;
  const shareUrl = `${env.SITE_URL}/post/${slug}`
  const searchClient = useMemo(() => {
    return algoliasearch(env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY);
  }, [env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY]);
  
  return (
    <Container py="0" pb="16" flex="1" maxW={"1624px"}>
      <Grid
        gridTemplateAreas={'". breadcrumbs ." "timeline post ."'}
        gridTemplateColumns={'240px 1fr 240px'} 
        gridColumnGap={'105px'}
      >
        <Box 
          padding={'60px 0'}
          gridArea={'breadcrumbs'}
        >
          <Breadcrumb separator="/">
            <BreadcrumbItem>
              <BreadcrumbLink
                as={Link}
                href={`/${locale}`}
                fontSize="sm"
                noOfLines={1}
              >
                Blog
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                as={Link}
                href={`/${locale}/posts`}
                fontSize="sm"
                noOfLines={1}
              >
                {category?.name}
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink fontSize="sm" noOfLines={1}>
                {post.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>

        <Box 
          alignSelf={'start'}
          gridArea={'timeline'}
          as={'aside'}
          role={'complementary'}
          position={'sticky'}
          top={'100px'}
        >
          {!!post.toc ? (
            <TableOfContents headings={blocksToTOC(post.blocks, 1)} />
          ) : null}
        </Box>

        <Box gridArea={'post'}>
          <Box maxWidth="1024px">
            {post.post_type !== "video" ? (
              <Box>
                <Img
                  borderRadius={"8px"}
                  src={post.image}
                  alt={post.title}
                />

                <Flex
                  alignItems={'center'}
                  height={'60px'}
                  justifyContent={'space-between'}
                >
                  <HStack>
                    <Text fontSize="sm" color="muted">
                      {moment(post.published_date).format("MMM DD,YYYY")} ·
                    </Text>

                    <Text fontSize="sm" color="muted">
                      {post.timeToConsume}
                    </Text>
                  </HStack>

                  <Text fontSize={'sm'} color={'muted'}>
                    {`Page last updated ${moment(
                      post?.gitlog?.date
                    ).fromNow()}`}
                  </Text>
                </Flex>
              </Box>
            ) : null}

            <Heading
              color="heading-navy-fg"
              marginBottom={'48px'}
              variant="h2"
            >
              {post.title}
            </Heading>

            <Heading
              marginBottom={'56px'}
              variant="h4"
            >
              {post.short_desc}
            </Heading>

            <Divider mt="8px" mb="48px" />

            {post.post_type === "video" && (
              <Flex mb={!post.blocks?.length ? "32px" : 0} direction="column">
                <YoutubePlayer videoId={videoId} />

                <Flex
                  alignItems={'center'}
                  height={'60px'}
                  justifyContent={'space-between'}
                  marginTop={'-50px'}
                >
                  <HStack>
                    <Text fontSize="sm" color="muted">
                      {moment(post.published_date).format("MMM DD,YYYY")} ·
                    </Text>

                    <Text fontSize="sm" color="muted">
                      {post.timeToConsume}
                    </Text>
                  </HStack>

                  <Text fontSize={'sm'} color={'muted'}>
                    {`Page last updated ${moment(
                      post?.gitlog?.date
                    ).fromNow()}`}
                  </Text>
                </Flex>
              </Flex>
            )}

            {(post.blocks?.length ?? 0) > 0 && (
              <Flex direction="column" gap="32px" marginBottom={'96px'}>
                {post.blocks?.map((block, i) => (
                  <Block
                    key={i}
                    block={block}
                    locale={locale}
                  />
                ))}
              </Flex>
            )}

            <Flex 
              direction={'row'} 
              gap={'12px'}
              marginBottom={'48px'}
            >
              {post.topic?.map((topic, i) => (
                <Button
                  variant={'smallFilter'}
                  as={'a'}
                  href={`/posts/${category?.slug}?${qs.stringify({
                    topicFilters: topic
                  })}`}
                >
                  {topics.find((t) => t.id === topic)?.name}
                </Button>
              ))}
            </Flex>

            <Flex
              gap={'24px'}
            >
              <Text>
                Share this post:
              </Text>

              <Flex
                alignItems={'center'}
                gap={'8px'}
              >
                <TwitterShareButton url={shareUrl}>
                  <Icon
                    boxSize="28px"
                    opacity={0.6}
                    color="text-hero-fg"
                    as={AiOutlineTwitter}
                  />
                </TwitterShareButton>

                <LinkedinShareButton url={shareUrl}>
                  <Icon
                    boxSize="28px"
                    opacity={0.6}
                    color="text-hero-fg"
                    as={AiFillLinkedin}
                  />
                </LinkedinShareButton>

                <FacebookShareButton url={shareUrl}>
                  <Icon
                    boxSize="28px"
                    opacity={0.6}
                    color="text-hero-fg"
                    as={AiFillFacebook}
                  />
                </FacebookShareButton>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Grid>

      <Divider
        mb={'96px'}
        mt={'80px'}
      />

      <Heading
        color="heading-navy-fg"
        marginBottom={'48px'}
        variant={'h4'}
      >
        {'May also interest you'}
      </Heading>

      <InstantSearch
        searchClient={searchClient}
        indexName={`web_posts_${env.ALGOLIA_INDEX}`}
      >
        <Configure
          hitsPerPage={4}
          facetsRefinements={{
            category: [category.id],
            locale: [locale]
          }}
        />

        <RelatedSection topics={topics}/>
      </InstantSearch>
    </Container>
  )
}

/**
 * `RelatedSection` component.
 */

function RelatedSection({ topics }: Pick<Props,'topics'>) {
  const { hits } = useHits<BlogHit>();

  return (
    <Grid
      gridGap={'24px'}
      gridTemplateColumns={'repeat(4, 1fr)'}
      marginBottom={'96px'}
    >
      {hits.map(hit => (
        <BlogCard
          post={hit}
          topics={topics as Topic[]}
        />
      ))}
    </Grid>
  )
}
