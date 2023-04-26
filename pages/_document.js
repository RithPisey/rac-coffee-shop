import { Html, Head, Main, NextScript } from "next/document";
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
