import { BlitzPage } from "@blitzjs/next";

import UserInfo from "@/core/components/UserInfo";
import Layout from "@/core/layouts/Layout";

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <UserInfo />
    </Layout>
  );
};

export default Home;
