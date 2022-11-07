import Head from "next/head";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
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
      </Head>
      <Header />
      <main>
        <Hero />
        <Speakers />
        <Schedule />
        {/* <Sponsors /> */}
        {/* <Newsletter /> */}
      </main>
      <Footer />
    </>
  );
}
