// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import "react-datepicker/dist/react-datepicker.css";
import "styles/index.scss";
import Head from "next/head";
import React, { useState } from "react";
import { UserContext } from "components";
// @ts-ignore
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  // const UserContext = createContext({});
  interface user {
    logged: boolean;
    userName: string;
    role: string;
    id: number;
  }
  const [user, setUser] = useState<user>({
    logged: false,
    userName: "null",
    role: "none",
    id: 0,
  });
  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        <Head>
          <link rel="shortcut icon" href="icons/student-1.png" />
        </Head>
        <div>
          <Component {...pageProps} />
        </div>
        <DefaultSeo />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
