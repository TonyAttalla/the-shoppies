import { Box, Flex, Heading, IconButton, Spacer } from '@chakra-ui/react';
import { CheckIcon, CloseIcon, InfoIcon } from '@chakra-ui/icons';
import { ScaleFade } from '@chakra-ui/react';
import { useState } from 'react';
import InfoModal from './InfoModal';
function Movie({ name, isNominated, id, year, nominateMovie, removeMovie, nominees }) {
  const [modalOpen, setModalOpen] = useState(false);

  const removeOrNominateMovie = () => {
    if (nominees) {
      removeMovie(id);
    } else {
      nominateMovie(id);
    }
  };

  return (
    <ScaleFade initialScale={0.9} in={true}>
      <InfoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={name}
        movieId={id}
      ></InfoModal>
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
          <Heading p={2} size="md">
            {name} ({year})
          </Heading>
          <Spacer />

          <IconButton
            marginRight={1}
            colorScheme={nominees ? 'red' : 'green'}
            icon={nominees ? <CloseIcon /> : <CheckIcon />}
            disabled={!nominees && isNominated}
            onClick={() => {
              removeOrNominateMovie();
            }}
          />
          <IconButton
            _hover={{ bg: 'gray.500' }}
            backgroundColor="gray.400"
            icon={<InfoIcon></InfoIcon>}
            disabled={!nominees && isNominated}
            onClick={() => {
              setModalOpen(true);
            }}
          />
        </Flex>
      </Box>
    </ScaleFade>
  );
}
export default Movie;
