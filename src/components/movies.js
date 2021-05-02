import { useState, useEffect, useCallback } from 'react';
import { getMovies as apiGetMovies } from '../api/movies';
import Search from './search';
import Banner from './banner';
import find from 'lodash.find';
import remove from 'lodash.remove';
import { useToast } from '@chakra-ui/react';
import { Skeleton } from '@chakra-ui/react';
import Movie from './movie';
import Header from './header';
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
  const [notification, setNotification] = useState(false);
  const [liveSearch, setLiveSearch] = useState(true);
  const toast = useToast();
  const scrollbarProps = {
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
  };
  // local storage
  useEffect(() => {
    localStorage.setItem('nominees', JSON.stringify(nominees));
    if (nominees.length === 5) {
      setNotification(true);
    } else {
      setNotification(false);
    }
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
        duration: 1000,
        isClosable: true,
      });
    } else {
      const movieToNominate = find(movies, function (movie) {
        return movie.imdbID === id;
      });
      toast({
        title: 'Nominee added.',
        description: "You've added '" + movieToNominate.Title + "' to your nominations",
        status: 'success',
        duration: 1000,
        isClosable: true,
      });
      setNominees([...nominees, movieToNominate]);
    }
  };

  const unnominateMovie = id => {
    const newNominees = [...nominees];
    const removedNominee = remove(newNominees, nominee => nominee.imdbID === id)[0];
    setNominees([...newNominees]);
    toast({
      title: 'Nominee removed.',
      description: "You've removed '" + removedNominee.Title + "' from your nominations",
      status: 'success',
      duration: 1000,
      isClosable: true,
    });
  };

  const getMovies = useCallback(
    (currentPage = 1) => {
      setLoading(true);
      setPage(currentPage);
      apiGetMovies(currentPage, query.trim()).then(res => {
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
    <Box width="100%">
      <Banner isOpen={notification}></Banner>
      <Center>
        <Flex direction="column" p={10} width="90%">
          <Header></Header>
          <Search
            loading={loading}
            getMovies={getMovies}
            query={query}
            setQuery={setQuery}
            liveSearch={liveSearch}
          ></Search>
          <SimpleGrid columns={[1, null, 2]} spacing={5}>
            <Box marginTop={5} marginBottom={5}>
              <Heading size="lg">
                {movies.length > 0 &&
                  !loading &&
                  'Search results( ' +
                    currentPageStart +
                    '-' +
                    currentPageEnd +
                    ' of ' +
                    totalResults +
                    ')'}
                {(movies.length === 0 || loading) && 'Movies'}
              </Heading>
              <Box
                height="60vh"
                overflow="scroll"
                overflowX="hidden"
                overflowY="auto"
                css={scrollbarProps}
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
              <Flex hidden={movies.length === 0} mt={3} alignItems="center">
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
            <Box marginTop={5} marginBottom={5}>
              <Heading size="lg">My Nominations ({nominees.length}/5)</Heading>
              <Box
                height="60vh"
                overflow="scroll"
                overflowX="hidden"
                overflowY="auto"
                css={scrollbarProps}
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

              <Flex mt={3}>
                <Spacer />
                <FormLabel htmlFor="live-search">
                  <Text> Live Search?</Text>
                </FormLabel>
                <Switch
                  defaultIsChecked
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
        </Flex>
      </Center>
    </Box>
  );
}
export default Movies;
