import Head from "next/head";
import { parseISO, format } from "date-fns";
import { useColorMode, Flex, Stack, Avatar } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NavBarLayout from "./NavBarLayout";
import Text from "../components/custom/Text";
import Heading from "../components/custom/Heading";
import ViewCounter from "../components/ViewsCounter";

export default function BlogLayout({ children, frontMatter }) {
  const { colorMode } = useColorMode();
  const textColor = {
    light: "gray.700",
    dark: "gray.400",
  };
  const router = useRouter();
  const slug = router.asPath.replace("/blog/", "");
  return (
    <NavBarLayout>
      <Head>
        <title>{slug} - Blog - Aymen Ben Zlaouia</title>
      </Head>

      <Stack
        as="article"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        w="100%"
        px={2}
      >
        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
          {frontMatter.title}
        </Heading>
        <Flex
          justify="space-between"
          align={["initial", "center"]}
          direction={["column", "row"]}
          mt={2}
          w="100%"
          mb={4}
        >
          <Flex align="center">
            <Avatar
              size="xs"
              name="Aymen Ben Zlaouia"
              src="/images/me.png"
              mr={2}
            />
            <Text fontSize="sm" color={textColor[colorMode]}>
              {frontMatter.by}
              {"Aymen Ben Zlaouia / "}
              {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}
            </Text>
          </Flex>
          <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
            {frontMatter.readingTime.text}
            {` • `}
            <ViewCounter slug={frontMatter.slug} />
          </Text>
        </Flex>
        {children}
      </Stack>
    </NavBarLayout>
  );
}
