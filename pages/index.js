import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Flex, Stack, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn, FaMedium } from "react-icons/fa";
import Typical from "react-typical";
import ButtonLink from "../components/custom/ButtonLink";
import SocialMediaBtn from "../components/custom/SocialMediaBtn";
import Text from "../components/custom/Text";
import MaskedMe from "../components/svg/MaskedMe";
import ContentLayout from "../layouts/contentLayout";
import NavBarLayout from "../layouts/NavBarLayout";

const steps = ["Developer 👋", 1000, "Full Stack Developer 👌", 2000];
export default function Index() {
  const textHoverColor = useColorModeValue("gray.700", "white");

  return (
    <NavBarLayout>
      <Head>
        <title>Home - Aymen Ben Zlaouia</title>
      </Head>

      <ContentLayout>
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
            <Text
              as="span"
              color="red.500"
              textShadow="1px 1px black"
              fontSize="4xl"
              ml={2}
            >
              <Typical wrapper="span" steps={steps} loop={1} />
            </Text>
          </Text>
          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "center", md: "flex-start" }}
            mb={6}
          >
            <ButtonLink
              href="/contact"
              _hover={{
                color: textHoverColor
              }}
            >
              Hire Me
            </ButtonLink>
            <ButtonLink
              href="https://aymen-ben-zlaouia.netlify.app/"
              isExternal
              background="none"
              color="red.500"
              ml={{ base: 0, md: 3 }}
            >
              Check Resume <ExternalLinkIcon mx="2px" />
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
              ariaLabel="Medium"
              icon={<FaMedium />}
            />
            <SocialMediaBtn
              href="https://github.com/aymoun95"
              colorScheme="github"
              ariaLabel="Github"
              icon={<FaGithub />}
            />
            <SocialMediaBtn
              href="https://www.linkedin.com/in/ben-zlaouia-aymen/"
              colorScheme="linkedIn"
              ariaLabel="Linkedin"
              icon={<FaLinkedinIn />}
            />
          </Box>
        </Stack>
        <Flex
          w={{ base: "80%", md: "40%" }}
          mb={{ base: 12, md: 0 }}
          position="relative"
          right={{ base: 0, md: 10 }}
          top={{ base: 0, md: "-3rem" }}
        >
          <MaskedMe />
        </Flex>
      </ContentLayout>
    </NavBarLayout>
  );
}
