import ProfileLayout from "@/container/layouts/ProfileLayout";
import ProfilePage from "@/container/profile";
import { ReactElement } from "react";

const Profile = () => {
  return (
    <div>
      <ProfilePage />
    </div>
  );
};

export default Profile;

Profile.getLayout = function (page: ReactElement) {
  return <ProfileLayout>{page}</ProfileLayout>;
};
