import "../styles/globals.css";
import { store } from "../store/app";
import { Provider } from "react-redux";
import Head from "next/head";
import Layout from "../layouts/default";
import { appWithTranslation } from "next-i18next";
function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default appWithTranslation(App);
