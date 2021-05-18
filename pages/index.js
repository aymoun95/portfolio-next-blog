import { Flex, Stack, Text, Heading, useColorMode } from "@chakra-ui/react";
import Head from "next/head";

import Container from "../components/Container";
export default function Index() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  return (
    <>
      <Container>
        <Head>
          <title>Home - BenjaminAYmen</title>
        </Head>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          px={2}
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading mb={2}>Hi, I'm AYmen Cason</Heading>
            <Text color={colorSecondary[colorMode]}>
              In exercitation reprehenderit voluptate ea voluptate. Aliquip
              Lorem cillum in Lorem magna eiusmod amet nostrud cillum nostrud.
              Irure magna aliqua incididunt quis voluptate eu deserunt
              exercitation quis et nulla cillum proident eu.Velit cupidatat
              mollit ad elit labore laborum consectetur dolor cillum quis
              officia. Elit et nostrud commodo dolor nulla consectetur ex. Aute
              elit tempor in ea consectetur pariatur ut in occaecat officia. Ea
              magna nulla anim dolore ipsum labore fugiat. Mollit ullamco eu
              sunt sint eu incididunt. Do sunt officia nostrud proident
              cupidatat consectetur ea aliquip qui ut sit non. Minim culpa in
              proident pariatur occaecat consequat eiusmod ad aliquip culpa quis
              Lorem quis non. Sint dolore deserunt voluptate fugiat officia
              anim. Duis officia minim ut elit do exercitation anim enim
              exercitation qui veniam labore. Ex reprehenderit culpa aliquip non
              esse elit. Labore aute adipisicing adipisicing excepteur ut nisi
              aute cillum ullamco non velit qui duis cillum. Est dolore quis
              nisi non ex fugiat sunt irure est. Elit nisi amet dolore aliqua et
              ipsum consequat consequat tempor duis laborum. Aute duis eiusmod
              est anim eiusmod dolor sunt occaecat quis reprehenderit aliqua
              occaecat enim. In pariatur incididunt ea cupidatat. In consectetur
              dolor duis ullamco occaecat sunt in ea pariatur. Veniam est
              nostrud ea in culpa irure ullamco dolore pariatur consectetur.
              Eiusmod adipisicing quis mollit esse aute labore eu velit
              voluptate consequat quis id enim excepteur. Est quis eiusmod id
              magna in pariatur esse dolor. Labore minim voluptate ullamco
              laborum reprehenderit est nulla tempor in do incididunt qui
              occaecat sunt. Fugiat aliquip ex dolor ex eu. Magna pariatur elit
              minim ex. Tempor adipisicing pariatur aute ea aliqua eiusmod ad
              ea. Dolor ipsum id officia commodo laborum sunt sunt laboris magna
              exercitation. Irure irure esse quis velit. Consequat proident
              cillum laboris tempor minim laboris eu tempor pariatur nisi
              consequat laborum laborum.
            </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
