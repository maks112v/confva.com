import splitbee from "@splitbee/web";
import type { AppProps } from "next/app";
import "../styles/globals.css";

splitbee.init({
  token: process.env.NEXT_PUBLIC_SPLITBEE_TOKEN,
  scriptUrl: "/bee.js",
  apiUrl: "/_hive",
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
