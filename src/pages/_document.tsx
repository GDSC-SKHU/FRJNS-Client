import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

import { IS_PROD } from "@/constants";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {IS_PROD && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-T9CVL6WSLQ"
              strategy="afterInteractive"
            />
            <Script id="google-analytics">
              {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-T9CVL6WSLQ');`}
            </Script>
          </>
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
