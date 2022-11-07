import "@/styles/tailwind.css";
import splitbee from "@splitbee/web";
import "focus-visible";

splitbee.init({
  token: process.env.NEXT_PUBLIC_SPLITBEE_TOKEN,
  scriptUrl: "/bee.js",
  apiUrl: "/_hive",
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
