import { Box, InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { debounce } from 'lodash';
import { useEffect } from 'react';
function Search({ loading, getMovies, query, setQuery, liveSearch }) {
  useEffect(() => {
    if (liveSearch && query) {
      getMovies(1);
    }
  }, [query, liveSearch, getMovies]);

  // only update search every 300 ms so use effect doesnt run
  // every time an update is made to the search terms
  const sendQuery = debounce(newQuery => {
    setQuery(newQuery);
  }, 300);

  return (
    <Box width="100%">
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray" />} />
        <Input
          type="text"
          placeholder="Title (4+ chars)"
          onChange={e => {
            const newQuery = e.target.value;
            if (newQuery.length > 3) {
              sendQuery(newQuery);
            }
          }}
        />
        <Button
          type="submit"
          hidden={liveSearch}
          isLoading={loading}
          marginLeft={5}
          colorScheme="green"
          disabled={query.length < 3}
          onClick={() => getMovies(1)}
        >
          Search
        </Button>
      </InputGroup>
    </Box>
  );
}
export default Search;
