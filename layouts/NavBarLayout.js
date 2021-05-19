import { Flex, useColorMode } from "@chakra-ui/react";
import Header from "../components/Header/Header";

export default function NavBarLayout(props) {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "white",
    dark: "#171717",
  };

  const color = {
    light: "black",
    dark: "white",
  };

  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0"
      {...props}
    >
      <Header />
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
        w="100%"
        mt={[4, 8, 8]}
      >
        {props.children}
      </Flex>
    </Flex>
  );
}
