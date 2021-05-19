import { Box, Flex, Button } from "@chakra-ui/react";
import Logo from "./Logo";
import { useState } from "react";
import MenuItem from "./MenuItem";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import IconButton from "../theme/IconButton";
import DarkModeSwitch from "../DarkModeSwitch";
import styled from "@emotion/styled";

const Header = (props) => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
  `;
  return (
    <StickyNav
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["gray.500", "gray.500", "transparent", "transparent"]}
      color={["white", "white", "gray.700", "gray.700"]}
      {...props}
    >
      <Flex align="center">
        <Logo w="100px" color={["white", "white", "gray.500", "gray.500"]} />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? (
          <IconButton icon={<CloseIcon />} />
        ) : (
          <IconButton icon={<HamburgerIcon />} />
        )}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-around", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/blog">Blog</MenuItem>
          <MenuItem to="/projects">Projects</MenuItem>
          <MenuItem to="/contact">Contact</MenuItem>
          <DarkModeSwitch />
        </Flex>
      </Box>
    </StickyNav>
  );
};

export default Header;
