import { BlitzPage } from "@blitzjs/next";
import { Suspense } from "react";

import UserInfo from "@/core/components/UserInfo";
import Layout from "@/core/layouts/Layout";

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
