import { useEffect } from 'react';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import { NextComponentType, NextPageContext } from 'next';

import DynamicTheme from '@/constants/themes/DynamicTheme';
import Meta from '@/modules/meta/Meta';

const AppComponent: NextComponentType<
  AppContext,
  AppInitialProps,
  AppProps
> = ({ Component, pageProps }) => {

  useEffect(()=> {
    if("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
       navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
}, [])

  return (
    <DynamicTheme>
      <Meta />
      <Component {...pageProps} />
    </DynamicTheme>
  )
}

export default AppComponent;