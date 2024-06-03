import { Card, Button } from "antd";
import { IoSettingsOutline } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { RiCoupon2Fill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { useAuthProfile } from "@/store/auth/authHook";
import { signOut } from "next-auth/react";
import { useDispatch } from "react-redux";
import { signOutAction } from "@/store/auth/authActions";

const Sidebar = ({setSidebar, sidebar}: {setSidebar : any, sidebar: number}) => {
  const user = useAuthProfile();
  const dispatch = useDispatch();
  console.log({ user });
  return (
    <Card
      style={{ backgroundColor: "#1F1B17" }}
      className="w-full h-full flex border-0 flex-col justify-between  rounded-lg shadow-lg relative"
    >
      <div className="">
        <div className="flex justify-center flex-col items-center space-x-2">
          <h2 className="text-xl text-white font-semibold">
            {user?.firstName} {user?.lastName}
          </h2>
          <p className="text-[#D2D2D2]">Traveler</p>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-4 w-full">
          <Button
            onClick={ () => setSidebar(0)}
            style={{
              backgroundColor: `${sidebar === 0 ? '#C09D5E' : '#454545'}`,
              padding: "32px 10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "10px",
              fontSize: "20px",
            }}
            type="default"
            className="w-full  border-0  text-white"
          >
            <div className="flex items-center gap-3">
              <FaHistory />
              <small>Order History</small>
            </div>
            <IoIosArrowForward />
          </Button>
          <Button
            onClick={() => setSidebar(1)}
            style={{
              backgroundColor: `${sidebar === 1 ? '#C09D5E' : '#454545'}`,
              padding: "32px 10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "10px",
              fontSize: "20px",
            }}
            type="default"
            className="w-full  border-0  text-white"
          >
            <div className="flex items-center gap-3">
              <IoSettingsOutline />
              <small>Setting</small>
            </div>
            <IoIosArrowForward />
          </Button>
          <Button
            onClick={() => setSidebar(2)}
            style={{
              backgroundColor: `${sidebar === 2 ? '#C09D5E' : '#454545'}`,
              padding: "32px 10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "10px",
              fontSize: "20px",
            }}
            type="default"
            className="w-full  border-0  text-white"
          >
            <div className="flex items-center gap-3">
              <RiCoupon2Fill />
              <small>Promos</small>
            </div>
            <IoIosArrowForward />
          </Button>
        </div>
      </div>
      <div className="w-full absolute bottom-0 left-0">
        <Button
          style={{
            backgroundColor: "#1F1B17",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            border: "1px solid #C09D5E",
            color: "#C09D5E",
          }}
          type="default"
          className="w-[90%] rounded-pill mx-auto py-4"
          onClick={() => {
            signOut();
            dispatch(signOutAction());
          }}
        >
          Sign Out
        </Button>
      </div>
    </Card>
  );
};

export default Sidebar;
