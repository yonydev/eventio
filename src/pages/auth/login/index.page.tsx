import { BlitzPage } from "@blitzjs/next";
import { useRouter } from "next/router";

import Layout from "@/core/layouts/Layout";

import LoginForm from "./components/LoginForm";

const LoginPage: BlitzPage = () => {
  const router = useRouter();

  return (
    <Layout title="Log In">
      <LoginForm
        onSuccess={(_user) => {
          const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/";
          return router.push(next);
        }}
      />
    </Layout>
  );
};

export default LoginPage;
