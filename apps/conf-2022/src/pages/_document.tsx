import { DefaultSeo } from "next-seo";
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/icons/apple-touch-icon.png?v=1'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/icons/favicon-32x32.png?v=1'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/icons/favicon-16x16.png?v=1'
          />
          <link rel='manifest' href='/icons/site.webmanifest?v=1' />
          <link
            rel='mask-icon'
            href='/icons/safari-pinned-tab.svg?v=1'
            color='#5bbad5'
          />
          <link rel='shortcut icon' href='/icons/favicon.ico?v=1' />
          <meta name='apple-mobile-web-app-title' content='God &amp; Me' />
          <meta name='application-name' content='God &amp; Me' />
          <meta name='msapplication-TileColor' content='#00aba9' />
          <meta
            name='msapplication-config'
            content='/icons/browserconfig.xml?v=1'
          />
          <meta name='theme-color' content='#ffffff' /> */}
          <DefaultSeo
            titleTemplate={`God & Me`}
            openGraph={{
              type: "website",
              locale: "en_IE",
              url: "https://confva.com/",
              site_name: "God & Me | Conference 2021",
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
