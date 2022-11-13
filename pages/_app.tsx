import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

import { store } from '@store/index';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

import { Session } from 'next-auth';
import { SessionProvider as AuthProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';

// import '@splidejs/react-splide/css/skyblue';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
    pageProps: { session?: Session };
};
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);
    return (
        <ThemeProvider>
            <AuthProvider session={session}>
                <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default MyApp;
