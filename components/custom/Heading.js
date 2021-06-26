import { Heading as ChakraHeading, useColorMode } from "@chakra-ui/react";

export default function Heading({ children, ...rest }) {
  const { colorMode } = useColorMode();
  const headingColor = {
    light: "gray.700",
    dark: "darkWhiteHighEmphasize",
  };
  return (
    <ChakraHeading color={headingColor[colorMode]} {...rest}>
      {children}
    </ChakraHeading>
  );
}
