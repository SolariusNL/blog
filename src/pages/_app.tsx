import "@/styles/globals.css";
import "@mantine/carousel/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";

import { createTheme, MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";

const theme = createTheme({});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme} forceColorScheme="light">
      <Component {...pageProps} />
    </MantineProvider>
  );
}
