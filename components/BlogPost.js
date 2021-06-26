import NextLink from "next/link";
import { Flex, Box, Link, useColorModeValue } from "@chakra-ui/react";
import { parseISO, format } from "date-fns";
import Text from "./custom/Text";
import Heading from "./custom/Heading";
// import useSWR from "swr";
// import fetcher from "../lib/fetcher";
import { tagColor } from "../utils/tagColor";
import Tag from "./custom/Tag";
const BlogPost = ({ title, publishedAt, summary, slug, tags }) => {
  // const { data } = useSWR(`/api/views/${slug}`, fetcher);
  // const views = data?.total;
  const summaryColor = useColorModeValue("gray.600", "gray.300");
  const dateColor = useColorModeValue("gray.600", "gray.400");
  const yearColor = useColorModeValue("telegram.500", "telegram.400");
  return (
    <NextLink href={`/blog/${slug}`} passHref>
      <Link w="100%" _hover={{ textDecoration: "none" }}>
        <Box mt={12} display="block" width="100%">
          <Flex
            width="100%"
            align="flex-start"
            justifyContent="space-between"
            flexDirection={["column", "row"]}
          >
            <Flex
              flexDirection="column"
              align="flex-start"
              justifyContent="start"
              width="100%"
            >
              <Heading size="2xl" as="h3" mb={1} fontWeight="700">
                {title}
              </Heading>
            </Flex>

            <Text
              minWidth="250px"
              textAlign={["left", "right"]}
              mb={[4, 0]}
              fontSize="16px"
              fontWeight="500"
              color={dateColor}
            >
              {format(parseISO(publishedAt), "MMMM dd, yyyy")}
              {/* {` • `}
              {`${views ? new Number(views).toLocaleString() : "–––"} views`} */}
            </Text>
          </Flex>
          <Text fontSize="17px" fontWeight="400" color={summaryColor} py="1">
            {summary}
          </Text>
          {tags.map((tag) => {
            const color = tagColor[tag];

            return (
              <Tag color={color} key={tag}>
                {tag}
              </Tag>
            );
          })}
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogPost;
