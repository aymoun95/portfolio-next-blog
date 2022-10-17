import { Heading as ChakraHeading, useColorMode } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Text from './Text';

export default function Heading({ children, backButton, ...rest }) {
  const router = useRouter();

  const { colorMode } = useColorMode();
  const headingColor = {
    light: 'gray.700',
    dark: 'darkWhiteHighEmphasize'
  };

  const back = () => {
    router.back();
  };
  return (
    <ChakraHeading display="flex" alignItems="center" color={headingColor[colorMode]} {...rest}>
      {backButton && (
        <Text
          onClick={back}
          display="inline-block"
          mr={6}
          fontSize="0.5em"
          _hover={{
            cursor: 'pointer'
          }}>
          &#x2b05;
        </Text>
      )}
      {children}
    </ChakraHeading>
  );
}
