import '@styles/globals.css';
import type { AppProps } from 'next/app';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState.js';
import Layout from '@containers/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
