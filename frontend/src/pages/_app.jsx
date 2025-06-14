import Navigation from "@/sections/Navigation";
import "@/styles/globals.css";
// import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}