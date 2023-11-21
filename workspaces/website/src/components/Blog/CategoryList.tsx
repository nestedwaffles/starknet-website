/**
 * Module dependencies
 */

import { Box, Flex, Heading } from "@chakra-ui/react";
import { Category } from "@starknet-io/cms-data/src/categories";
import { Button } from "@ui/Button";
import { useMemo } from "react";
import { normalizeCategories } from "src/utils/blog";
import { navigate } from "vite-plugin-ssr/client/router";


/**
 * `Props` type.
 */

export type Props = {
  categories: readonly Category[];
  params: LocaleParams & {
    readonly category?: string;
  };
};

/**
 * Export `CategoryList` component.
 */

export const CategoryList = ({ categories, params }: Props) => {
  const normalizedCategories = useMemo(() => (
    normalizeCategories(categories).filter((category) => !category.parentCategory)
  ), [categories]);

  return (
    <Flex
      as="ul"
      gap="24px"
      flexDirection={'column'}
    >
      <Heading
        variant={'h5'}
        color={'heading-navy-fg'}
        paddingBottom={'8px'}
      >
        {'Explore'}
      </Heading>

      <Box>
        <Button
          variant="categoryVertical"
          as="a"
          isActive={params.category == null}
          onClick={() => {
            navigate(`/${params.locale}/posts`, {
              overwriteLastHistoryEntry: true
            })
          }}
        >
          All posts
        </Button>
      </Box>

      {normalizedCategories.map((category, index) => (
        <Box key={index}>
          <Button
            variant="categoryVertical"
            as="a"
            isActive={category.slug === params.category}
            onClick={() => {
              if (category.slug === params.category) return;

              navigate(`/${params.locale}/posts/${category.slug}`)
            }}
          >
            {category.name}
          </Button>
        </Box>
      ))}
    </Flex>
  );
}
