import { Box } from '@chakra-ui/layout';
import { Slide } from '@chakra-ui/react';

function Banner({ isOpen }) {
  return (
    <>
      {isOpen === false && (
        <Slide in={isOpen}>
          <Box bg="#9ae7b5" position="absolute" h="5vh" overflow="hidden" w="100%">
            {isOpen ? 'open' : 'not open'}
          </Box>
        </Slide>
      )}
    </>
  );
}
export default Banner;
