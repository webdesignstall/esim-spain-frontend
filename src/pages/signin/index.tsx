import SignInPage from "@/container/auth/signin";
import AuthLayout from "@/container/layouts/AuthLayout";
import { ReactElement } from "react";

const Signin = () => {
  return (
    <div>
      <SignInPage />
    </div>
  );
};

export default Signin;

Signin.getLayout = function (page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};
