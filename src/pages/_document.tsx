import { Head, Html, Main, NextScript } from "next/document";

import { isProd } from "@/utils";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {isProd(process.env.NODE_ENV) && (
          <>
            {/* eslint-disable-next-line @next/next/next-script-for-ga */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-T9CVL6WSLQ" />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-T9CVL6WSLQ');`,
              }}
            />
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
