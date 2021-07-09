import { Button, Link, useColorMode } from "@chakra-ui/react";

export default function SocialMediaBtn({ icon, colorScheme, href, ariaLabel }) {
  const { colorMode } = useColorMode();
  const color = {
    light: "gray.700",
    dark: "gray.300",
  };
  return (
    <Link href={href} isExternal aria-label={ariaLabel}>
      <Button
        _hover={{
          color: "red.500",
          transform: "scale(1.5)",
        }}
        color={color[colorMode]}
        fontSize="3xl"
        cursor="pointer"
        variant="link"
        colorScheme={colorScheme}
        leftIcon={icon}
        aria-label={ariaLabel}
      />
    </Link>
  );
}
