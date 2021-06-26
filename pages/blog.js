import { useEffect, useState } from "react";
import Head from "next/head";
import { Alert, AlertIcon, Box, Flex, Input, Stack } from "@chakra-ui/react";
import NavBarLayout from "../layouts/NavBarLayout";
import { getAllFilesFrontMatter } from "../lib/mdx";
import BlogPost from "../components/BlogPost";

import ContentLayout from "../layouts/contentLayout";
import FilterTags from "../components/blog/FilterTags";
import { tagColor } from "../utils/tagColor";

const TAGS = Object.keys(tagColor);

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [blogPosts, setBlogPosts] = useState(posts);

  const filterPosts = (searchFilter) => {
    const blogsResults = posts.filter(
      (frontMatter) =>
        frontMatter.title.toLowerCase().includes(searchFilter.toLowerCase()) &&
        selectedTags.every((tag) => frontMatter.tags.includes(tag))
    );
    setBlogPosts(blogsResults);
  };

  const handleChange = (e) => {
    const newSearchValue = e.target.value.trim();
    let updatedSearchValue = "";
    if (newSearchValue.length !== 0) {
      const searchArray = newSearchValue.split(" ");
      const removedSearchTags = searchArray.filter((el) => !TAGS.includes(el));
      updatedSearchValue = removedSearchTags.join(" ");
    }
    setSearchValue(updatedSearchValue);
    filterPosts(updatedSearchValue);
  };

  useEffect(() => {
    filterPosts(searchValue);
  }, [selectedTags]);

  return (
    <NavBarLayout>
      <Head>
        <title>Blog - Aymen Ben Zlaouia</title>
      </Head>

      <ContentLayout>
        <Stack fontSize="16px" px={{ md: "10", lg: "20", xl: "30" }} py="4">
          <Flex justify="center">
            <Input
              onChange={handleChange}
              value={`${selectedTags.join(" ")} ${searchValue}`.trim()}
              variant="outline"
              placeholder="Search..."
              maxWidth="400px"
            />
          </Flex>
          <FilterTags
            handleTagClick={setSelectedTags}
            selectedTags={selectedTags}
          />

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
