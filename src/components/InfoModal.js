import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/modal';
import { Tag, TagLabel, Spacer } from '@chakra-ui/react';
import { Text, SimpleGrid } from '@chakra-ui/react';
import { SkeletonText, Box, Image, Flex, HStack } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { getMovieDetails } from '../api/movies';
function InfoModal({ isOpen, onClose, title, movieId }) {
  const [isLoading, setLoading] = useState(true);
  const [movieDetails, setMovieDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const [posterURL, setPosterURL] = useState('');
  useEffect(() => {
    if (isOpen) {
      getMovieDetails(movieId).then(res => {
        console.log('running useeffect');
        const response = res.data;
        const movieDetails = {};
        movieDetails['Actors'] = response.Actors;
        movieDetails['Director'] = response.Director;
        movieDetails['Plot'] = response.Plot;
        movieDetails['Rating'] = response.Rated;
        movieDetails['Runtime'] = response.Runtime;
        movieDetails['Year'] = response.Year;
        movieDetails['Language'] = response.Language;
        setPosterURL(response.Poster);
        setGenres(response.Genre.split(','));
        setMovieDetails(movieDetails);
        setLoading(false);
      });
    }
  }, [isOpen, movieId]);

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />

      <ModalContent maxW="45rem">
        <ModalCloseButton />

        <ModalHeader>{title}</ModalHeader>

        {isLoading && (
          <SkeletonText p={5} isLoaded={!isLoading} mt="4" noOfLines={20} spacing="4" />
        )}

        <ModalBody>
          <SimpleGrid columns={[1, null, 2]} spacing={5}>
            <Flex direction="column" justifyContent="center">
              {Object.keys(movieDetails).map((key, i) => {
                return (
                  <Box pb={5}>
                    <Text as="b">{key}: </Text> {movieDetails[key]} <br />
                  </Box>
                );
              })}
            </Flex>
            {/* <Flex alignItems="center" justifyContent="center"> */}

            <Image objectFit="fill" src={posterURL} alt="poster" />
            {/* </Flex> */}
          </SimpleGrid>
        </ModalBody>
        <ModalFooter display="flex">
          <HStack>
            {genres &&
              genres.map(genre => (
                <Tag size="lg" key={genre} colorScheme="gray">
                  <TagLabel>{genre}</TagLabel>
                </Tag>
              ))}
          </HStack>
          <Spacer></Spacer>
        </ModalFooter>
        {/* </Skeleton> */}
      </ModalContent>
    </Modal>
  );
}
export default InfoModal;
