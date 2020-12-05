import "../styles/globals.css";
import styles from "../styles/App.module.css";

import Head from "next/head";
import type { AppProps /*, AppContext */ } from "next/app";
import { AppBar } from "@material-ui/core";
import ThemeProvider from "../providers/theme";

const Layout: React.FC = ({ children, ...rest }) => {
  return <div className={styles.layout}>{children}</div>;
};
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ThemeProvider>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <AppBar className={styles.header}> header </AppBar>
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>
        <footer className={styles.footer}>footer</footer>
      </ThemeProvider>
    </Layout>
  );
}

export default MyApp;
