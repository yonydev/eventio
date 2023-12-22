import { BlitzPage } from "@blitzjs/next";
import { Suspense } from "react";

import Layout from "@/core/layouts/Layout";

import UserInfo from "@/components/UserInfo";

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <Suspense fallback="Loading...">
        <UserInfo />
      </Suspense>
    </Layout>
  );
};

export default Home;
