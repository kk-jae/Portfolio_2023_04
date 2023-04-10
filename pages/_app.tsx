import "../styles/globals.css";
import type { AppProps } from "next/app";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { RecoilRoot } from "recoil";
import { globalStyles } from "../src/components/commons/styles/globalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles}></Global>
          <Component {...pageProps} />
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}
