import splitbee from "@splitbee/web";
import type { AppProps } from "next/app";
import "ui/base.css";

splitbee.init({
  scriptUrl: "/bee.js",
  apiUrl: "/_hive",
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
