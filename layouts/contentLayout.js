import { Flex } from "@chakra-ui/react";

export default function ContentLayout({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  children,
  ...rest
}) {
  return (
    <Flex
      align={{ base: "center", md: "flex-start" }}
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{
        base: "column-reverse",
        md: "row",
      }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
      {...rest}
    >
      {children}
    </Flex>
  );
}
