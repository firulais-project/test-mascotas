import NextLink from "next/link";
import { Center, Box, Flex, Link, Container, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Container>
      <Center>
        <Flex px={40} py={4} justifyContent="space-between" alignItems="center">
          <Flex flexDirection="row" justifyContent="center" alignItems="center">
            <NextLink href="/">
              <Link px={8} color="black" cursor="pointer">
                <Flex alignItems="center">
                  <Heading as="h1" size="lg" isTruncated>Firulais.org</Heading>
                </Flex>
              </Link>
            </NextLink>
          </Flex>
          <Box>
          </Box>
        </Flex>
      </Center>
    </Container>
  );
};
export default Header;