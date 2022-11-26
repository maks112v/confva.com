import Head from "next/head";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LiveSlice } from "@/components/Live";
import { Schedule } from "@/components/Schedule";
import { Speakers } from "@/components/Speakers";

export default function Home() {
  return (
    <>
      <Head>
        <title>Times Up - Conference 2022 - Harrisonburg, VA</title>
        <meta
          name="description"
          content="Dear Time... The world I live in does not value you. It wastes you on futile, intrinsic things, seemingly trying to quicken your passage. As Christians, we need to be better stewards - you are a precious, finite gift that God gave us temporarily."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/images/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="apple-mobile-web-app-title" content="Snippit" />
        <meta name="application-name" content="<APP NAME>" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <main>
        <Hero />
        <LiveSlice
          title={"Live Stream"}
          embed={
            "https://www.youtube.com/embed/live_stream?channel=UC70jpGER721BjOlDqafmSkA"
          }
        />

        <Speakers />
        <Schedule />
        {/* <Sponsors /> */}
        {/* <Newsletter /> */}
      </main>
      <Footer />
    </>
  );
}
