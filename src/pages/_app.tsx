import '@/styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';

import type { AppProps } from 'next/app';

import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { ToastContainer } from 'react-toastify';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <div className="touch-pan-y touch-pan-x">
      {getLayout(<Component {...pageProps} />)}
      <Toaster
        toastOptions={{
          className: '',
          duration: 1500,
        }}
      />
    </div>
  );
}
