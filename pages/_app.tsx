import '../styles/globals.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import type { AppProps } from 'next/app';

import { useEffect } from "react";

/**
 * This is called before every page is rendered.  So it's ideal to inject stuff like bootstrap into the page
 * @param Component
 * @param pageProps
 * @constructor
 */
function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
  return <Component {...pageProps} />
}

export default MyApp
