import Link from "next/link";
import { Text, useColorModeValue } from "@chakra-ui/react";
const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      fontWeight="bold"
      color={{ base: "white", md: textColor }}
      {...rest}
    >
      <Link href={to}>{children}</Link>
    </Text>
  );
};

export default MenuItem;
