import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Movies from './components/movies';
// import { extendTheme } from '@chakra-ui/react';
// import { ColorModeScript } from '@chakra-ui/react';

// const config = {
//   initialColorMode: 'dark',
//   useSystemColorMode: false,
// };

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Movies></Movies>
    </ChakraProvider>
  );
}

export default App;
