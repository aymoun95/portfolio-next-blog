import { useColorMode, IconButton as ChakraIconButton } from "@chakra-ui/react";

const IconButton = ({ icon }) => {
  const { colorMode } = useColorMode();
  const iconColor = {
    light: "black",
    dark: "white",
  };
  return (
    <ChakraIconButton
      aria-label="Toggle dark mode"
      icon={icon}
      color={iconColor[colorMode]}
    />
  );
};

export default IconButton;
