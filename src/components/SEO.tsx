import Head from "next/head";
import { useRouter } from "next/router";

import { BASE_URL } from "@/constants";

const TITLE = "FRJNS";
const DESCRIPTION = "For Newjeans";
const IMAGE = "/opengraph.png";

export default function SEO() {
  const router = useRouter();

  const URL = BASE_URL + router.asPath;

  return (
    <Head>
      <title>{TITLE}</title>
      <link rel="canonical" href={URL} />
      <meta name="description" content={DESCRIPTION} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content={IMAGE} />
      <meta property="og:url" content={URL} />

      {/* for twitter */}
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={IMAGE} />
    </Head>
  );
}
