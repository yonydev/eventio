import { Routes } from "@blitzjs/next";
import { useMutation } from "@blitzjs/rpc";
import { Button } from "@mantine/core";
import Link from "next/link";

import logout from "@/features/auth/mutations/logout";
import { useCurrentUser } from "@/features/users/hooks/useCurrentUser";

const UserInfo = () => {
  const currentUser = useCurrentUser();
  const [logoutMutation] = useMutation(logout);

  if (currentUser) {
    return (
      <>
        <Button
          className=""
          onClick={async () => {
            await logoutMutation();
          }}
        >
          Logout
        </Button>
        <div>
          User id: <code>{currentUser.id}</code>
          <br />
          User role: <code>{currentUser.role}</code>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Link href={Routes.SignupPage()} className="">
          <strong>Sign Up</strong>
        </Link>
        <Link href={Routes.LoginPage()} className="">
          <strong>Login</strong>
        </Link>
      </>
    );
  }
};

export default UserInfo;
