import Link from "next/link";
import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import Text from "../components/custom/Text";
import Heading from "../components/custom/Heading";

export default function ContentLayout({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  children,
  ...rest
}) {
  const { colorMode } = useColorMode();
  const textColor = {
    light: "gray.700",
    dark: "gray.400",
  };

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

ContentLayout.defaultProps = {
  title: "React landing page with Chakra UI",
  subtitle:
    "This is the subheader section where you describe the basic benefits of your product",
  image: "https://source.unsplash.com/collection/404339/800x600",
  ctaText: "Create your account now",
  ctaLink: "/signup",
};
