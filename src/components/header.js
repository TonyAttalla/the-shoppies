import { Flex, Heading, Spacer } from '@chakra-ui/react';
import shopify from '../media/shopify.png';
import { Image } from '@chakra-ui/react';
function Header() {
  return (
    <Flex height="10vh" width="100%" alignItems="center" pb={5}>
      <Heading as="h1">Welcome to The Shoppies!</Heading>
      <Spacer></Spacer>
      <Flex alignItems="center" boxSize="100px">
        <Image src={shopify} alt="shopify logo" />
      </Flex>
    </Flex>
  );
}

export default Header;
