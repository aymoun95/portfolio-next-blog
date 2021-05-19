import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";

export default function Logo(props) {
  const logoColor = useColorModeValue("gray.700", "white");

  return (
    <Box {...props}>
      <Text
        color={{ base: "white", md: logoColor }}
        fontSize="2xl"
        fontWeight="bold"
      >
        Portfolio
      </Text>
    </Box>
  );
}
