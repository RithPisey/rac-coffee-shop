import { Html, Head, Main, NextScript } from "next/document";
import Loading from "../components/Loading";
import { ThreeCircles } from "react-loader-spinner";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <div id="globalLoader">
          <ThreeCircles color="#8bc34a" />
        </div>
      </body>
    </Html>
  );
}
