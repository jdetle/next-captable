import { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { lightTheme } from "../styles/theme";
import { AppProps } from "next/dist/next-server/lib/router/router";
const theme = lightTheme();
import styles from "../styles/App.module.css";
import { AppBar } from "@material-ui/core";

const Layout: React.FC = ({ children, ...rest }) => {
  return <div className={styles.layout}>{children}</div>;
};
export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      // @ts-ignore
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AppBar className={styles.header}>NextJS Cap Table</AppBar>
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>
        <footer
          className={styles.footer}
        >{`All Rights Reserved, John Detlefs ${new Date().getFullYear()}`}</footer>
      </ThemeProvider>
    </Layout>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
