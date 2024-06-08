import SignUpPage from "@/container/auth/signup";
import AuthLayout from "@/container/layouts/AuthLayout";
import { ReactElement } from "react";

const SignUp = () => {
  return  <SignUpPage />
};

export default SignUp;

SignUp.getLayout = function (page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};
