import { FunctionComponent } from "react";
import Logo from "./layout/logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  MenuIcon,
  IconButton,
  useColorModeValue,
  LinkProps,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IoLogoGithub } from "react-icons/io5";
interface NavbarProps {
  path: string;
}

interface LinkItemProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  path: string;
  target?: string;
}
const LinkItem: FunctionComponent<LinkItemProps> = ({
  children,
  href,
  path,
  target,
  ...otherProps
}) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray.200", "whiteAlpha.900");
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? "glassTeal" : undefined}
        color={active ? "#202023" : inactiveColor}
        target={target}
        {...otherProps}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar: FunctionComponent<NavbarProps> = ({ path, ...otherProps }) => {
  const bg = useColorModeValue("#ffffff40", "#20202380");
  return (
    <Box
      position={"fixed"}
      as="nav"
      w="100%"
      bg={bg}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...otherProps}
    >
      <Container
        display={"flex"}
        p={2}
        maxWidth="container.md"
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Flex alignItems={"center"} mr={5}>
          <Heading as={"h1"} size={"lg"} letterSpacing={"tighter"}>
            <Logo />
          </Heading>

          <Stack
            direction={{ base: "column", md: "row" }}
            display={{ base: "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems={"center"}
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            <LinkItem href="/work" path={path}>
              Work
            </LinkItem>
            <LinkItem href="/work" path={path}>
              Post
            </LinkItem>
            <LinkItem
              target="_blank"
              href="https://github.com/roth-dev"
              path={path}
              display="inline-flex"
              alignItems="center"
              style={{ gap: 4 }}
              pl={2}
            >
              <IoLogoGithub />
              Source
            </LinkItem>
          </Stack>

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                varient={"outline"}
                aria-label="Options"
              >
                <MenuList>
                  <NextLink href={"/"} passHref>
                    <MenuItem as={Link}>About</MenuItem>
                  </NextLink>
                  <NextLink href={"/work"} passHref>
                    <MenuItem as={Link}>Works</MenuItem>
                  </NextLink>
                  <NextLink href={"/post"} passHref>
                    <MenuItem as={Link}>Posts</MenuItem>
                  </NextLink>
                  <MenuItem as={Link} href="https://github.com/roth-dev">
                    View source on GitHub
                  </MenuItem>
                </MenuList>
              </MenuButton>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
