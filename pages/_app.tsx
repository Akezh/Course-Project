// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import "react-datepicker/dist/react-datepicker.css";
import "styles/index.scss";
import Head from "next/head";
import React from "react";

// @ts-ignore
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="icons/student-1.png" />
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
      <DefaultSeo />
    </>
  );
}

export default MyApp;
