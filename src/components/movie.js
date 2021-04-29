import { Box, Flex, Heading, IconButton, Spacer } from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { ScaleFade } from '@chakra-ui/react';
function Movie({
  name,
  isNominated,
  id,
  year,
  nominateMovie,
  removeMovie,
  nominees,
}) {
  const removeOrNominateMovie = () => {
    if (nominees) {
      console.log('RUNNING ON TOGGLE');
      removeMovie(id);
    } else {
      nominateMovie(id);
    }
  };

  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Box
        borderWidth="1px"
        borderRadius="md"
        backgroundColor="white"
        textColor="black"
        p={5}
        marginTop={6}
        width="95%"
      >
        <Flex alignItems="center">
          <Heading p={2} as="h4" size="md">
            {name} ({year})
          </Heading>
          <Spacer />
          <IconButton
            colorScheme={nominees ? 'red' : 'green'}
            icon={nominees ? <CloseIcon /> : <CheckIcon />}
            disabled={!nominees && isNominated}
            onClick={() => {
              removeOrNominateMovie();
            }}
          />
        </Flex>
      </Box>
    </ScaleFade>
  );
}
export default Movie;
