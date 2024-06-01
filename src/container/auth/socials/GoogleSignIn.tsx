import { FaGoogle } from "react-icons/fa6";
import AuthApi from "../../../apis/auth/AuthApi";
import { SocialProvider } from "@/common/constant/app";
import { signInAction } from "@/store/auth/authActions";
import { Progress } from "d-react-components";
import moment from "moment";
import { signIn, useSession } from "next-auth/react";
import React, { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Path from "@/common/constant/path";

const GoogleSignIn = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const provider = "google";
  const { data: session } = useSession();
  // const signInAction = useSignIn();
  // const lastRouteLogin = useSelector(
  //     (state: any) => state?.metadata?.lastRouteLogin
  // );

  const providerData = useMemo(() => {
    switch (provider) {
      case "google":
        return {
          imgSource: "/images/btnGoogle.png",
          signUpUrl: Path.singUp().href,
        };
      // case "facebook":
      //     return {
      //         imgSource: "/images/btnFacebook.png",
      //         signUpUrl: url.accountSignUpFacebook().href,
      //     };
      default:
        return {};
    }
  }, [provider]);

  useEffect(() => {
    if (!session) return;
    const { expires, user, idToken } = session as any;
    if (!idToken) return;

    const expiresTime = moment(expires).valueOf();
    if (expiresTime < new Date().getTime()) {
      return;
    }
    const APISocial = [
      {
        method: AuthApi.loginSocial,
        params: [SocialProvider.GOOGLE, idToken],
      },
    ];
    Progress.show(APISocial, ([res]: any) => {
      const { accessToken, isRegistered, profile } = res?.data?.data ?? {};
      if (isRegistered) {
        dispatch(signInAction({ profile, accessToken }));
        return true;
      } else {
        router.push({
          pathname: providerData.signUpUrl,
          query: { profile: JSON.stringify(profile) },
        });
      }
    });
  }, [session]);
  return (
    <button
      onClick={() =>
        signIn(provider, {
          callbackUrl: document.URL + "?provider=" + provider,
        })
      }
      type="button"
      className="text-white w-full font-semibold flex gap-3 justify-center items-center bg-[#C09D5E] px-4 border border-[#C09D5E] rounded-full 2xl:py-4 py-2"
    >
      <FaGoogle />
      <span>Sign In with Google</span>
    </button>
  );
};

export default GoogleSignIn;
