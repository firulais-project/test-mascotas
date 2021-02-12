import {ChakraProvider, ColorModeProvider, Container} from '@chakra-ui/react';
import Header from '../components/Header'
import theme from '../theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <ChakraProvider
        reactCSS
        theme={theme}
      >
        <ColorModeProvider
          options={{
            initialColorMode: 'light',
            useSystemColorMode: false
          }}
        >
          <Container maxW="1140px">
            <Component {...pageProps} />
          </Container>
        </ColorModeProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
