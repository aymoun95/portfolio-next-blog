import { Box, Link as ChakraLink } from "@chakra-ui/react";
import Text from "../custom/Text";
const Footer = () => (
  <>
    <Box as="footer">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        minH="4rem"
        px={[4, 6, 10, 14, 20]}
        maxW="100%"
        mx="auto"
      >
        <Box>
          <Text>
            Built with{" "}
            <span role="img" aria-label="red heart">
              ❤️
            </span>{" "}
            by{" "}
            <ChakraLink
              href="https://www.linkedin.com/in/ben-zlaouia-aymen/"
              fontWeight="600"
              _focus={{ outline: "none" }}
              isExternal
            >
              Aymen
            </ChakraLink>
            .
          </Text>
        </Box>
      </Box>
    </Box>
  </>
);

export default Footer;
