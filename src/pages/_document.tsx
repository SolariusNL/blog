import { ColorSchemeScript } from "@mantine/core";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <ColorSchemeScript defaultColorScheme="auto" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Blog for all things Solarius" />
        <title>Solarius Blog</title>
        <meta name="title" content="Solarius Blog" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
