import { AppProps, ErrorBoundary } from "@blitzjs/next";
import { MantineProvider } from "@mantine/core";
import React from "react";
import { withBlitz } from "src/blitz-client";
import "src/styles/globals.css";

import { RootErrorFallback } from "@/core/components/RootErrorFallback";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary FallbackComponent={RootErrorFallback}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </ErrorBoundary>
  );
}

export default withBlitz(MyApp);
