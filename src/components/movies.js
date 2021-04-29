import { useState, useEffect, useCallback } from 'react';
import { getMovies as apiGetMovies } from '../api/movies';
import Search from './search';
import find from 'lodash';
import remove from 'lodash';
import { useToast } from '@chakra-ui/react';
import { Skeleton } from '@chakra-ui/react';

import {
  Box,
  SimpleGrid,
  Heading,
  Center,
  Flex,
  Spacer,
  Button,
  FormLabel,
  Text,
  Switch,
} from '@chakra-ui/react';

import Movie from './movie';

function Movies() {
  const localNominees = JSON.parse(localStorage.getItem('nominees')) || [];
  const [movies, setMovies] = useState([]);
  const [nominees, setNominees] = useState(localNominees);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPageStart, setCurrentPageStart] = useState(0);
  const [currentPageEnd, setCurrentPageEnd] = useState(0);
  const [query, setQuery] = useState('');
  const [liveSearch, setLiveSearch] = useState(false);

  const toast = useToast();
  //The Lord of the Rings: The

  useEffect(() => {
    localStorage.setItem('nominees', JSON.stringify(nominees));
  }, [nominees]);

  useEffect(() => {
    setCurrentPageStart(10 * page - 9);
    setCurrentPageEnd(10 * page - 10 + movies.length);
  }, [page, movies]);

  const nominateMovie = id => {
    if (nominees.length === 5) {
      toast({
        title: 'No more nominations available.',
        description: "You've already nominated 5 movies!",
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    } else {
      const movieToNominate = find(movies, function (movie) {
        return movie.imdbID === id;
      });
      toast({
        title: 'Nominee added.',
        description:
          "You've added " +
          "'" +
          movieToNominate.Title +
          "'" +
          ' to your nominations',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      setNominees([...nominees, movieToNominate]);
    }
  };

  const unnominateMovie = id => {
    console.log('unnominating');
    const newNominees = [...nominees];
    const removedNominee = remove(
      newNominees,
      nominee => nominee.imdbID === id
    )[0];
    console.log(removedNominee);
    console.log(newNominees);
    //const newNominees = filter(nominees, nominee => nominee.imdbID !== id);
    setNominees([...newNominees]);

    toast({
      title: 'Nominee removed.',
      description:
        "You've removed " +
        "'" +
        removedNominee.Title +
        "'" +
        ' from your nominations',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  const getMovies = useCallback(
    (currentPage = 1) => {
      setLoading(true);
      setPage(currentPage);
      apiGetMovies(currentPage, query).then(res => {
        console.log('QUERY THAT GETS SENT IS: ', query);
        let movies = res.data.Search;
        setTotalResults(res.data.totalResults);
        if (movies) {
          setMovies(movies);
        } else {
          toast({
            title: 'No results found.',
            description: "Couldn't find any movies with that search criteria.",
            status: 'error',
            duration: 2000,
            isClosable: true,
          });
          setMovies([]);
        }
        setLoading(false);
      });
    },
    [query, toast]
  );

  return (
    <>
      <Box width="100%">
        <Center>
          <Box p={10} width="90%">
            <Search
              loading={loading}
              getMovies={getMovies}
              query={query}
              setQuery={setQuery}
              liveSearch={liveSearch}
            ></Search>
            <SimpleGrid columns={[1, null, 2]} spacing={5}>
              <Box height="80vh" marginTop={5} marginBottom={5}>
                <Heading marginTop={7} as="h2" size="lg">
                  {movies.length > 0 &&
                    !loading &&
                    'Search results (' +
                      currentPageStart +
                      '-' +
                      currentPageEnd +
                      ' of ' +
                      totalResults +
                      ')'}
                  {(movies.length === 0 || loading) && 'Movies'}
                </Heading>
                <Box
                  height="70vh"
                  overflow="scroll"
                  overflowX="hidden"
                  overflowY="auto"
                  css={{
                    '&::-webkit-scrollbar': {
                      width: '4px',
                    },
                    '&::-webkit-scrollbar-track': {
                      width: '6px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      background: 'white',
                      borderRadius: '24px',
                    },
                  }}
                >
                  <Skeleton isLoaded={!loading}>
                    {movies.map(movie => (
                      <Movie
                        key={movie.imdbID}
                        name={movie.Title}
                        year={movie.Year}
                        id={movie.imdbID}
                        nominateMovie={nominateMovie}
                        nominees={false}
                        isNominated={find(nominees, function (movieToFind) {
                          return movieToFind.imdbID === movie.imdbID;
                        })}
                      ></Movie>
                    ))}
                  </Skeleton>
                </Box>
                <Flex
                  hidden={movies.length === 0}
                  height="12vh"
                  alignItems="center"
                >
                  <Button
                    disabled={page === 1}
                    colorScheme="green"
                    onClick={() => {
                      getMovies(page - 1);
                    }}
                  >
                    Back
                  </Button>
                  <Spacer />
                  <Button
                    disabled={currentPageEnd === parseInt(totalResults)}
                    colorScheme="green"
                    onClick={() => {
                      getMovies(page + 1);
                    }}
                  >
                    Next
                  </Button>
                </Flex>
              </Box>
              <Box height="80vh" marginTop={5} marginBottom={5}>
                <Heading marginTop={7} as="h2" size="lg">
                  My Nominations
                </Heading>
                <Box
                  height="70vh"
                  overflow="scroll"
                  overflowX="hidden"
                  overflowY="auto"
                  css={{
                    '&::-webkit-scrollbar': {
                      width: '4px',
                    },
                    '&::-webkit-scrollbar-track': {
                      width: '6px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      background: 'white',
                      borderRadius: '24px',
                    },
                  }}
                >
                  {nominees.map(movie => (
                    <Movie
                      key={movie.imdbID}
                      name={movie.Title}
                      year={movie.Year}
                      id={movie.imdbID}
                      isNominated
                      nominees={true}
                      removeMovie={unnominateMovie}
                    ></Movie>
                  ))}
                </Box>
                <Flex position="absolute" right={5} alignItems="center">
                  <FormLabel htmlFor="live-search">
                    <Text> Live Search?</Text>
                  </FormLabel>
                  <Switch
                    value={liveSearch}
                    onChange={e => {
                      setLiveSearch(!liveSearch);
                    }}
                    colorScheme="green"
                    id="live-search"
                  />
                </Flex>
              </Box>
            </SimpleGrid>
          </Box>
        </Center>
      </Box>
    </>
  );
}
export default Movies;
