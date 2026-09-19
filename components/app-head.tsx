import Head from "next/head";
import { publicPath } from "../lib/public-path";

interface Props {
  title?: string;
}

export default function AppHead(props: Props) {
  const { title = "Wikitrivia" } = props;

  return (
    <Head>
      <title>{title}</title>
      <link
        rel="preload"
        href={publicPath("fonts/inter-latin.woff2")}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href={publicPath("fonts/fraunces-latin.woff2")}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="icon"
        href={publicPath("favicon.svg")}
        sizes="any"
        type="image/svg+xml"
      />
      <link
        rel="icon"
        href={publicPath("favicon-light.png")}
        media="(prefers-color-scheme: light)"
        type="image/png"
      />
      <link
        rel="icon"
        href={publicPath("favicon-dark.png")}
        media="(prefers-color-scheme: dark)"
        type="image/png"
      />
      <link
        rel="icon"
        href={publicPath("favicon-light.png")}
        type="image/png"
      />
      <link
        rel="apple-touch-icon"
        href={publicPath("apple-touch-icon.png")}
        sizes="180x180"
      />
      <link rel="manifest" href={publicPath("manifest.webmanifest")} />
      <meta name="application-name" content="Wikitrivia" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Wikitrivia" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#f8f8f8" />
    </Head>
  );
}
