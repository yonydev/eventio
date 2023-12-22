import { BlitzLayout } from "@blitzjs/next";
import Head from "next/head";
import { Suspense } from "react";

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title || "eventio"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Suspense fallback="Loading...">{children}</Suspense>
    </>
  );
};

export default Layout;
