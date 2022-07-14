import MainNav from "../components/mobile-nav";
import { ChakraProvider } from "@chakra-ui/react";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MainNav />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
