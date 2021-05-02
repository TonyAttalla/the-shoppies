import { Box } from '@chakra-ui/layout';
import { Fade, Text, Flex } from '@chakra-ui/react';

function Banner({ isOpen }) {
  return (
    <Fade in={isOpen}>
      <Box bg="#9ae7b5" w="100%" p={2}>
        <Flex alignItems="center" justifyContent="center">
          <Text as="h4" color="black">
            You've nominated 5 movies. Congrats!
          </Text>
        </Flex>
      </Box>
    </Fade>
  );
}
export default Banner;
