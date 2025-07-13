import { Text as ChakraText, useColorMode } from '@chakra-ui/react';

export default function Text({ children, ...rest }) {
  const { colorMode } = useColorMode();
  const textColor = {
    light: 'gray.700',
    dark: 'gray.300'
  };
  return (
    <ChakraText color={textColor[colorMode]} {...rest}>
      {children}
    </ChakraText>
  );
}
