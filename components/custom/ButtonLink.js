import { Button, Link as ChakraLink } from "@chakra-ui/react";

import Link from "next/link";

export default function ButtonLink({
  href,
  children,
  style,
  passHref,
  isExternal,
  ...rest
}) {
  let ATagOrNextLink = Link;
  if (isExternal) {
    ATagOrNextLink = ChakraLink;
  }
  return (
    <ATagOrNextLink
      href={href}
      isExternal={isExternal}
      // w={{ base: "100%", sm: "100%" }}
    >
      <Button
        display="inline-block"
        fontSize="md"
        mt={2}
        borderRadius="md"
        borderWidth={2}
        borderColor="red.500"
        borderStyle="solid"
        cursor="pointer"
        fontWeight="bold"
        background="red.500"
        color="white"
        padding="10px 36p"
        {...rest}
        _hover={{
          background: "transparent",
          ...rest._hover,
        }}
      >
        {children}
      </Button>
    </ATagOrNextLink>
  );
}

ButtonLink.defaultProps = {
  isExternal: false,
};
