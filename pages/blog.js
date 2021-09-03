import { useEffect, useState } from "react";
import Head from "next/head";
import { Alert, AlertIcon, Box, Flex, Input, Stack } from "@chakra-ui/react";
import NavBarLayout from "../layouts/NavBarLayout";
import { getAllFilesFrontMatter } from "../lib/mdx";
import BlogPost from "../components/BlogPost";

import ContentLayout from "../layouts/contentLayout";
import FilterTags from "../components/blog/FilterTags";
import { isExistInTags, partition } from "../utils/helpers";

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState("");
  const [blogPosts, setBlogPosts] = useState(posts);

  const filterPosts = (searchFilter) => {
    const [pass, fail] = partition(searchFilter.split(" "), isExistInTags);

    const selectedTags = pass;
    const searchTitle = fail.join(" ").trim();

    const blogsResults = posts.filter(
      (frontMatter) =>
        frontMatter.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
        selectedTags.every((tag) => frontMatter.tags.includes(tag))
    );
    setBlogPosts(blogsResults);
  };

  const handleChange = (e) => {
    const newSearchValue = e.target.value;
    setSearchValue(newSearchValue);
    filterPosts(newSearchValue);
  };

  useEffect(() => {
    filterPosts(searchValue);
  }, [searchValue]);

  return (
    <NavBarLayout>
      <Head>
        <title>Blog - Aymen Ben Zlaouia</title>
      </Head>

      <ContentLayout>
        <Stack fontSize="16px" px={{ md: "10", lg: "20", xl: "30" }} py="4">
          {/* <Flex justify="center">
            <Input
              onChange={handleChange}
              value={searchValue}
              variant="outline"
              placeholder="Search..."
              maxWidth="400px"
            />
          </Flex>
          <FilterTags
            handleTagClick={setSearchValue}
            searchValue={searchValue}
          /> */}

          {blogPosts.length > 0 ? (
            blogPosts.map((frontMatter) => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))
          ) : (
            <Alert
              status="info"
              borderRadius="md"
              d="flex"
              justifyContent="center"
              mx="auto"
              maxWidth="500px"
              fontWeight="500"
              alignSelf="center"
            >
              <AlertIcon />
              No blog post has been found!
            </Alert>
          )}
        </Stack>
      </ContentLayout>
    </NavBarLayout>
  );
}

export async function getStaticProps() {
  const data = await getAllFilesFrontMatter("blog");
  const posts = data.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  return { props: { posts } };
}
