/**
 * Module dependencies
 */

import { BlogHit } from "src/pages/posts/CategoryPage";
import {
  Body,
  Content,
  Footer,
  Image,
  Root
} from "@ui/ArticleCard/ArticleCard";

import moment from "moment";
import { Topic } from "@starknet-io/cms-data/src/topics";
import { Tag } from "@chakra-ui/tag";
import { useMemo } from "react";
import { Box, Flex, Grid, Icon } from "@chakra-ui/react";
import { IoPlaySharp } from "react-icons/io5";

/**
 * `Props` type.
 */

type Props = {
  isFeatured?: boolean;
  post: BlogHit;
  topics: Topic[]
};


/**
 * Export `BlogCard` component.
 */

export const BlogCard = ({ isFeatured, post, topics }: Props) => {
  const topicNames = useMemo(() => (
    post.topic
      .slice(0, 3)
      .map((topic) => topics.find(({ id }) => id === topic)?.name)
      .filter((topic) => !!topic)
  ), [post, topics])

  return (
    <Root
      href={`/${post.locale}/post/${post.slug}`}
      sx={{
        img: {
          transition: 'transform 0.4s ease-in-out',
        },
        _hover: {
          background:
            "linear-gradient(0.25turn, white, white) padding-box,linear-gradient(200deg, #C507E4, #5C94FF) ",
          borderColor: "transparent",
          img : {
            transform: 'scale(1.05)'
          }
        },
        ...(isFeatured && { 
          minWidth: '434px',
          scrollSnapAlign: 'start',
        })
      }}
    >
      <Image
        aspectRatio={'1.78'}
        position={'relative'}
        url={post.image}
      >
        {(post.post_type === 'video' || post.post_type == 'audio') && (
          <Grid
            placeItems={'center'}
            position={'absolute'}
            inset={'0'}
          >
            <Icon
              as={IoPlaySharp}
              color={'white'}
              fontSize={'40px'}
            />
          </Grid>
        )}
      </Image>

      <Body
        maxHeight={'234px'}
        minHeight={'234px'}
      >
        {topicNames.length > 0 && (
          <Box
            height={'30px'}
            overflow={'hidden'}
            marginBottom={'10px'}
          >
            {topicNames.length !== 0 && (
              <Flex
                flexWrap={'wrap'}
                gap={'8px'}
              >
                {topicNames.map((topic) => (
                  <Tag
                    color={'inherit'}
                    fontSize={'12px'}
                    width={'max-content'}
                  >
                    {topic}
                  </Tag>
                ))} 
              </Flex>
            )}
          </Box>
        )}
        
        <Content
          excerpt={post.short_desc}
          title={post.title}
        />

        <Footer
          hideIcon
          marginTop={'auto'}
          padding={'16px 0 32px'}
          postType={post.post_type}
          publishedAt={moment(post.published_date).format("MMM DD, YYYY")}
          timeToConsume={post.timeToConsume}
        />
      </Body>
    </Root>
  );
}
