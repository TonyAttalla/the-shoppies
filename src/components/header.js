import { Flex, Heading, Spacer } from '@chakra-ui/react';
import shopify from '../media/shopify.png';
import { Image } from '@chakra-ui/react';
function Header() {
  return (
    <Flex height="8vh" width="100%" alignItems="center" mb={15}>
      <Heading as="h1" fontSize={{ base: '20px', md: '40px', lg: '50px' }}>
        Welcome to The Shoppies!
      </Heading>
      <Spacer></Spacer>
      <Flex alignItems="center" justifyContent="center">
        <Image height="10vh" minWidth="100" minHeight="100" src={shopify} alt="shopify logo" />
      </Flex>
    </Flex>
  );
}

export default Header;
