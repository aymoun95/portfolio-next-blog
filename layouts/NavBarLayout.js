import { Flex, useColorMode } from "@chakra-ui/react";
import { AnimatedFlex } from "../components/custom/AnimatedFlex";
import Header from "../components/Header/Header";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};
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
      maxW={{ xl: "100vw" }}
      m="0"
      {...props}
    >
      <Header />
      <AnimatedFlex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
        w="100%"
        mt={[4, 8, 8]}
        initial="initial"
        exit="out"
        animate="animate"
        variants={pageVariants}
        transition={{ duration: 0.5 }}
      >
        {props.children}
      </AnimatedFlex>
    </Flex>
  );
}
