import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import ButtonLink from "../components/custom/ButtonLink";
import NavBarLayout from "../layouts/NavBarLayout";
import { getAllFiles } from "../lib/file";

export default function work({ projects }) {
  const cardBgColor = useColorModeValue("white", "#171717");
  return (
    <NavBarLayout>
      <Head>
        <title>Work - Aymen Ben Zlaouia</title>
      </Head>
      <Box as="section" px="0" py="0">
        {projects.map((item, index) => (
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            justifyContent="center"
            alignItems="center"
            maxW="800px"
            margin="0 auto"
            w="90%"
            mb="5rem"
            key={index}
            _even={{
              flexDirection: { base: "column", md: "row-reverse" },
              "& .left": {
                marginLeft: { base: "0", md: "-150px" },
              },
              "& .right": {
                marginLeft: "0",
              },
            }}
          >
            <Box
              className="left"
              flex="1"
              w="100%"
              _hover={{
                "& img": { transform: "scale(1.1)", zIndex: "1" },
              }}
            >
              <Box
                h="500px"
                overflow="hidden"
                borderRadius="12px"
                overflow="hidden"
                boxShadow="0px 0px 20px #4705fc33"
                position="relative"
                _after={{
                  content: '""',
                  position: "absolute",
                  left: "0",
                  top: "0",
                  height: "100%",
                  width: "100%",
                  backgroundColor: "#5a24ed38",
                }}
              >
                <Image
                  src={item.img}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  transition="0.3s ease transform"
                />
              </Box>
            </Box>
            <Box
              className="right"
              flex="1"
              ml={{ base: "0", md: "-150px" }}
              mt={{ base: "-150px", md: 0 }}
              bg={cardBgColor}
              p="1rem 3rem"
              borderRadius="12px"
              boxShadow="0px 0px 20px #00000028"
              zIndex="2"
              w="90%"
            >
              <Heading fontSize="2.5rem">{item.title}</Heading>
              <Text fontSize="1.6rem" mb="10px">
                {item.subTitle}
              </Text>
              <Text color="gray" mb="10px">
                {item.description}
              </Text>
              <Flex
                justifyContent="flex-start"
                alignItems="center"
                flexDirection={{ base: "column", sm: "row" }}
              >
                <ButtonLink
                  href="/contact"
                  _hover={{
                    color: "red",
                  }}
                  width={{ base: "100%", sm: "auto" }}
                >
                  Hire Me
                </ButtonLink>
                {item?.link && (
                  <ButtonLink
                    href={item.link}
                    isExternal
                    background="none"
                    color="red.500"
                    ml={{ base: 0, sm: 3 }}
                    width={{ base: "100%", sm: "auto" }}
                  >
                    Preview <ExternalLinkIcon mx="2px" />
                  </ButtonLink>
                )}
              </Flex>
            </Box>
          </Flex>
        ))}
      </Box>
    </NavBarLayout>
  );
}

export async function getStaticProps() {
  const projects = await getAllFiles("work");
  return { props: { projects } };
}
