import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
// import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { CacheProvider, EmotionCache } from '@emotion/react';

import CssBaseline from '@mui/material/CssBaseline';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import ThemeProvider from '@/theme/ThemeProvider';
import createEmotionCache from '@/createEmotionCache';

// import { RouteGuard } from '@/components/RouteGuard';
import { SidebarProvider } from '@/contexts/SidebarContext';

import { AppStore, wrapper } from '@/redux/store';
import { appInfo } from '@/utilities/constants/application';

import '@/styles/global.css';

const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// interface MyAppProps  extends AppProps {
//   store?: AppStore;
//   emotionCache?: EmotionCache;
//   Component: NextPageWithLayout;
// }

interface MyAppProps {
  store?: AppStore;
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

function MyApp({ Component, ...rest }: MyAppProps | any) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>{appInfo.NAME}</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <SidebarProvider>
          <ThemeProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <CssBaseline />
              {getLayout(<Component {...pageProps} />)}
            </LocalizationProvider>
          </ThemeProvider>
        </SidebarProvider>
      </CacheProvider>
    </Provider>
  );
}

export default MyApp;
