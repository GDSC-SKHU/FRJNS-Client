import { useState } from "react";
import { Monitor } from "react95";
import original from "react95/dist/themes/original";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import styled, { ThemeProvider } from "styled-components";

import AppBar from "@/components/AppBar";
import GlobalStyles from "@/styles/Global";
import { mediaQuery } from "@/styles/media";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={original}>
          <GlobalStyles />
          <Background>
            <Layout>
              <AppBar />
              <Component {...pageProps} />
            </Layout>
            <FRJNSMonitor />
          </Background>
          <ReactQueryDevtools />
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.desktopBackground};
`;

const Layout = styled.div`
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

function FRJNSMonitor() {
  return (
    <MonitorWrapper>
      <Monitor backgroundStyles={{ background: "blue" }}>
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=_ZAgIHmHLdc"}
          width="100%"
          height="100%"
          muted
          playing
          controls={false}
        />
      </Monitor>
    </MonitorWrapper>
  );
}

const MonitorWrapper = styled.div`
  position: fixed;
  top: 24vh;
  left: 4vw;

  ${mediaQuery("sm")} {
    display: none;
  }
`;
