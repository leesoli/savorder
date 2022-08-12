import '../styles/globals.css';
import { ContextProvider } from '../contexts/index';

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

export default MyApp
