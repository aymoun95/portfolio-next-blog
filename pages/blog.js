import React, { useState } from "react";
import Head from "next/head";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import NavBarLayout from "../layouts/NavBarLayout";
import Heading from "../components/theme/Heading";
import { getAllFilesFrontMatter } from "../lib/mdx";
import BlogPost from "../components/BlogPost";

import { SearchIcon } from "@chakra-ui/icons";
import ContentLayout from "../layouts/contentLayout";
import Text from "../components/theme/Text";

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState("");

  // const filteredBlogPosts = posts
  //   .sort(
  //     (a, b) =>
  //       Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  //   )
  //   .filter((frontMatter) =>
  //     frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
  //   );

  const sortedBlogPosts = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return (
    <NavBarLayout>
      <Head>
        <title>Blog - Aymen Ben Zlaouia</title>
      </Head>

      <ContentLayout>
        <Stack
          spacing={4}
          w={{ base: "100%", md: "100%" }}
          align={["center", "center", "flex-start", "flex-start"]}
        >
          <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
            Blog ({posts.length} posts)
          </Heading>
          {/* <InputGroup mb={4} mr={4} w="100%">
            <Input
              aria-label="Search by title"
              placeholder="Search by title"
              onChange={(e) => setSearchValue(e.target.value)}
            /> */}
          {/* <InputRightElement>
              <SearchIcon color="gray.300" />
            </InputRightElement>
          </InputGroup> */}
          {/* {!filteredBlogPosts.length && (
            <Box display="block" width="100%">
              <Text>No posts found :(</Text>
            </Box>
          )}
          {filteredBlogPosts.map((frontMatter) => (
            <BlogPost key={frontMatter.title} {...frontMatter} />
          ))} */}
          {sortedBlogPosts.map((frontMatter) => (
            <BlogPost key={frontMatter.title} {...frontMatter} />
          ))}
        </Stack>
      </ContentLayout>
    </NavBarLayout>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}
