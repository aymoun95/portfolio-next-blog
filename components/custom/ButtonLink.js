import { Button } from "@chakra-ui/button";
import { Link } from "@chakra-ui/layout";

export default function ButtonLink({
  href,
  children,
  isExternal,
  style,
  ...rest
}) {
  return (
    <Link href={href} isExternal={isExternal}>
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
        }}
      >
        {children}
      </Button>
    </Link>
  );
}

ButtonLink.defaultProps = {
  isExternal: false,
};
