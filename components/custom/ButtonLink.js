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
    <Button
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
      padding="8px 15px"
      {...rest}
      _hover={{
        background: "transparent",
        ...rest._hover,
      }}
    >
      <ATagOrNextLink href={href} isExternal={isExternal}>
        {children}
      </ATagOrNextLink>
    </Button>
  );
}

ButtonLink.defaultProps = {
  isExternal: false,
};
