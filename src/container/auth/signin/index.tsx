import Image from "next/image";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import signUpImage from "../../../assets/images/signinBgImage.png";
import logo from "../../../assets/pirateLogo.svg";
import GoogleSignIn from "../socials/GoogleSignIn";
import styles from "./signin.module.css";
import AuthApi from "../../../apis/auth/AuthApi";
import { useDispatch } from "react-redux";
import { signInAction } from "../../../store/auth/authActions";
import { useRouter } from "next/router";

type Inputs = {
  email: string;
  password: string;
};

const SignInPage = () => {
  const [toggle, setToggle] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSignIn: SubmitHandler<Inputs> = async (data) => {
    const res = await AuthApi.login(data);
    const { accessToken, profile, isRegistered } = res?.data?.data ?? {};
    if (isRegistered && accessToken && profile) {
      dispatch(signInAction({ profile, accessToken }));
      router.push("/profile");
    }
  };

  return (
    <div className="bg-black min-h-screen flex justify-center">
      <div className="flex w-full justify-center">
        <div className="w-[53%] relative lg:block hidden">
          <Image
            className="w-full h-full object-cover"
            src={signUpImage}
            alt="login image"
          />
          <Link href={"/"}>
            <Image
                width={120}
                height={120}
                className="absolute top-10 left-10" src={'/assets/pirateLogo.svg'} alt="logo" />
          </Link>
          <p className="text-white absolute bottom-10 left-10">
            &copy; {new Date().getFullYear()} , eSIM Powered by Pirate Mobile
          </p>
        </div>
        <div
          className={`${styles.backgroundImage} lg:w-[47%] w-full 2xl:pr-16 p-4 flex flex-col`}
        >
          <div
            className={`${styles.contentWrapper} 2xl:px-20 lg:px-10 lg:py-16`}
          >
            <div className="flex items-center justify-between lg:justify-end w-full">
              <div className="lg:hidden block">
                <Image
                  className="w-14 h-14"
                  src={logo}
                  alt="signup background image"
                />
              </div>
              <div className="text-white">
                <p className="flex items-center gap-3 justify-end">
                  <span className="lg:text-xl text-xs">
                    Don&apos;t have an account?
                  </span>
                  <Link
                    className="text-[#C09D5E] lg:text-xl text-xs"
                    href={"/signup"}
                  >
                    Sign Up
                  </Link>
                  <span className="lg:p-3 p-1 border rounded-2xl border-[#C09D5E] bg-[#221f1f] ">
                    <BsThreeDots className="text-2xl" />
                  </span>
                </p>
              </div>
            </div>
            <h4 className="lg:text-4xl text-2xl mt-20 text-white font-semibold">
              Sign In
            </h4>
            <div className="flex w-full flex-col gap-3 justify-between mt-10">
              <div className="lg:w-7/12 w-full">
                <GoogleSignIn/>
              </div>
              <p className="text-[#D2D2D2] text-sm mb-4 ml-2">
                Or sign in using your email address
              </p>
              {/*<div className="lg:w-5/12 w-full">*/}
              {/*  <FacebookSignIn />*/}
              {/*</div>*/}
            </div>


            <form className="w-full" onSubmit={handleSubmit(handleSignIn)}>
              <div className="flex justify-between lg:flex-row flex-col gap-4 w-full">
                <div className="flex flex-col w-full">
                  <label
                    className="text-white text-md font-normal mb-3"
                    htmlFor="email"
                  >
                    Your email
                  </label>
                  <input
                    className={`bg-transparent outline-none text-white text-lg px-5 py-3 rounded-3xl border ${
                      errors.email ? "border-red-500" : "border"
                    }`}
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="youremail@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 mt-2 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full ">
                  <label
                    className="text-white text-md font-normal mb-3"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative w-full">
                    <input
                      className={`bg-transparent outline-none text-white text-lg px-5 w-full py-3 rounded-3xl border ${
                        errors.password ? "border-red-500" : "border"
                      }`}
                      type={toggle ? "text" : "password"}
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                      placeholder="********"
                    />
                    <button
                      type="button"
                      className="text-white absolute bottom-5 text-lg right-3"
                      onClick={() => setToggle((prev) => !prev)}
                    >
                      {toggle ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 mt-2 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>
              {/*<div className="flex gap-2 mt-3 items-center">*/}
              {/*  <input type="checkbox" className="text-white" />*/}
              {/*  <label className="text-white text-sm" htmlFor="remember">*/}
              {/*    Remember me*/}
              {/*    <Link*/}
              {/*      className="text-[#C09D5E] ml-2 hover:underline"*/}
              {/*      href={"/forget-password"}*/}
              {/*    >*/}
              {/*      Forget Password*/}
              {/*    </Link>*/}
              {/*  </label>*/}
              {/*</div>*/}
              <div className="mt-10">
                <button
                  type="submit"
                  className="text-white font-semibold w-full text-center  bg-[#C09D5E] px-14 rounded-full lg:py-4 py-2"
                >
                  Sign In Now
                </button>
              </div>
            </form>
          </div>
          <p className="text-white text-center pt-40 lg:hidden block">
            &copy; {new Date().getFullYear()} , eSIM Powered by Pirate Mobile
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
