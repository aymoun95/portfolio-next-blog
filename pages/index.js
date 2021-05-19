import Head from "next/head";
import NavBarLayout from "../layouts/NavBarLayout";
import Typical from "react-typical";
import Text from "../components/custom/Text";
import ContentLayout from "../layouts/contentLayout";
import { Box, Stack, Link, Flex, Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import ButtonLink from "../components/custom/ButtonLink";
import { FaMedium, FaGithub, FaLinkedinIn } from "react-icons/fa";
import SocialMediaBtn from "../components/custom/SocialMediaBtn";

export default function Index() {
  const steps = ["Developer 👋", 1000, "Full Stack Developer 👌", 2000];

  return (
    <NavBarLayout>
      <Head>
        <title>Home - Aymen Ben Zlaouia</title>
      </Head>

      <ContentLayout>
        <>
          <Stack
            w={{ base: "80%", md: "50%" }}
            align={{ base: "center", md: "flex-start" }}
          >
            <Text fontSize="3xl" align={{ base: "center", md: "left" }}>
              Hello, I'm
            </Text>
            <Text
              fontSize="5xl"
              fontWeight="bold"
              align={{ base: "center", md: "left" }}
            >
              Aymen Ben Zlaouia
            </Text>
            <Text fontSize="3xl" align={{ base: "center", md: "left" }}>
              And I'm a{" "}
              <Text as="span" color="red.500" fontSize="4xl" ml={2}>
                <Typical wrapper="span" steps={steps} loop={1} />
              </Text>
            </Text>
            <Flex
              direction={{ base: "column", md: "row" }}
              align={{ base: "center", md: "flex-start" }}
              mb={6}
            >
              <ButtonLink href="#">Hire Me</ButtonLink>
              <ButtonLink
                href="http://aymen.benzlaouia.netcv.com"
                isExternal
                background="none"
                color="red.500"
                ml={{ base: 0, md: 6 }}
              >
                See My Resume <ExternalLinkIcon mx="2px" />
              </ButtonLink>
            </Flex>
            <Box
              display={["flex", "flex", "flex", "inline-block"]}
              justifyContent="center"
              alignItems="center"
            >
              <SocialMediaBtn
                href="https://medium.com/@aymenbenzlaouia95/a-brief-history-on-javascript-ba2407e67bcd"
                colorScheme="medium"
                icon={<FaMedium />}
              />
              <SocialMediaBtn
                href=""
                colorScheme="github"
                icon={<FaGithub />}
              />
              <SocialMediaBtn
                href="https://www.linkedin.com/in/ben-zlaouia-aymen/"
                colorScheme="linkedIn"
                icon={<FaLinkedinIn />}
              />
            </Box>
          </Stack>
          <Box
            w={{ base: "80%", sm: "60%", md: "50%" }}
            mb={{ base: 12, md: 0 }}
          >
            <Image
              src="https://source.unsplash.com/collection/404339/800x600"
              size="100%"
              rounded="1rem"
              shadow="2xl"
            />
          </Box>
        </>
      </ContentLayout>
    </NavBarLayout>
  );
}
