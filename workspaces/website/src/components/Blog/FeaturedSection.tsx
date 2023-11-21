/**
 * Module dependencies
 */

import { Box, Flex, Grid } from "@chakra-ui/react";
import { Heading } from "@ui/Typography/Heading";
import { Configure, useHits } from "react-instantsearch-hooks-web";
import { BlogHit } from "src/pages/posts/CategoryPage";
import { BlogCard } from "./BlogCard";
import { Topic } from "@starknet-io/cms-data/src/topics";
import { IconButton } from "@ui/IconButton";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { useCallback, useEffect, useState } from "react";

/**
 * `featuredPostsPadding` constant.
 */

const featuredPostsPadding = 984;

/**
 * `Props` type.
 */

export type Props = {
  params: LocaleParams;
  topics: Topic[];
};

/**
 * Export `FeaturedSection` component.
 */

export const FeaturedSection = ({ params, topics }: Props) => {
  return (
    <Box>
      <Configure
        hitsPerPage={6}
        facetsRefinements={{
          locale: [params.locale]
        }}
      />

      <FeaturedSectionContent
        topics={topics}
      />
    </Box>
  );
}

/**
 * `FeaturedSectionContent` component.
 */

const FeaturedSectionContent = (props: Pick<Props,'topics'>) => {
  const { topics } = props;
  const { hits: posts } = useHits<BlogHit>();
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollTo = useCallback((index: number) => {
    if(index > 5) {
      index = 0;
    }

    if(index < 0) {
      index = 5;
    }

    const container = document.getElementById('featured-posts');

    if(!container) {
      return;
    }

    const scrollCap = container.scrollWidth - featuredPostsPadding;
    const scrollPosition = Math.floor(index / 6 * scrollCap);

    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    const container = document.getElementById('featured-posts');
    const handleScroll = () => {
      const container = document.getElementById('featured-posts');

      if(!container) {
        return;
      } 

      const scrollCap = container.scrollWidth - featuredPostsPadding
      const scrollPercentage = (Math.min(container?.scrollLeft, scrollCap) / scrollCap) * 100;
      const scrollPosition = Math.floor((scrollPercentage / 100) * 6);

      setScrollProgress(scrollPosition);
    };

    container?.addEventListener('scroll', handleScroll);

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Grid
      gap={'40px'}
      position={'relative'}
      sx={{
        _after: {
          content: '""',
          position: 'absolute',
          top: 0,
          right: '-72.5px',
          bottom: 0,
          width: '100px',
          background: 'linear-gradient(90deg, rgba(251,251,251,0) 0%, rgba(251,251,251,1) 90%)',
        },
        _dark: {
          _after: {
            background: 'linear-gradient(90deg, rgb(11,11,11, 0) 0%, rgba(11,11,11,1) 90%)',
          }
        }
      }}
    >
      <Heading
        as={'h1'}
        color={'heading-navy-fg'}
        variant={'h2'}
      >
        {'Trending Posts'}
      </Heading>

      <Flex
        gap={'24px'}
        id={'featured-posts'}
        overflowX={'auto'}
        scrollSnapType={'x mandatory'}
        paddingRight={`${featuredPostsPadding}px`}
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        }}
        width={'calc(100% + 72.5px)'}
      >
        {posts.map(post => (
          <BlogCard
            key={post.id}
            isFeatured
            post={post}
            topics={topics}
          />
        ))}
      </Flex>

      <Box position={'relative'}>
        <Flex gap={'12px'} zIndex={1} position={'relative'}>
          <IconButton
            opacity={scrollProgress === 0 ? 0.4 : 1}
            pointerEvents={scrollProgress === 0 ? 'none' : 'auto'}
            variant={'outline'}
            icon={<IoArrowBack/>}
            isRound
            aria-label={'Previous'}
            onClick={() => scrollTo(scrollProgress - 1)}
          />

          <IconButton
            opacity={scrollProgress === 5 ? 0.4 : 1}
            pointerEvents={scrollProgress === 5 ? 'none' : 'auto'}
            color={scrollProgress === 5 ? 'gray.300' : 'heading-navy-fg'}
            variant={'outline'}
            icon={<IoArrowForward/>}
            isRound
            aria-label={'Next'}
            onClick={() => scrollTo(scrollProgress + 1)}
          />
        </Flex>

        <Grid
          zIndex={0}
          position={'absolute'}
          height={'100%'}
          placeItems={'center'}
          width={'100%'}
          top={0}
        >
          <Flex
            gap={'8px'}
          >
            {posts.map((_, index) => (
              <Box
                key={index}
                width={'8px'}
                height={'8px'}
                borderRadius={'12px'}
                background={index === scrollProgress ? 'heading-navy-fg' : 'gray.300'}
              />
            ))}
          </Flex>
        </Grid>
      </Box>
    </Grid>
  );
}
