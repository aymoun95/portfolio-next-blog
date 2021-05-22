import { Button as ChakraButton, useColorMode } from "@chakra-ui/react";

export default function Button({ children, ...rest }) {
  const { colorMode } = useColorMode();
  const textColor = {
    light: "black",
    dark: "white",
  };
  return (
    <ChakraButton color={textColor[colorMode]} {...rest}>
      {children}
    </ChakraButton>
  );
}
