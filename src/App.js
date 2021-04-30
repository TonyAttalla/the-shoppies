import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Movies from './components/movies';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Movies></Movies>
    </ChakraProvider>
  );
}

export default App;
