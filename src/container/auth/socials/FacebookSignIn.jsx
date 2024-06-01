import { FaFacebook } from "react-icons/fa6";

const FacebookSignIn = () => {
  return (
    <button
      type="button"
      className="text-white w-full font-semibold flex gap-3 justify-center  border items-center bg-[#584d4d] 2xl:px-4 rounded-full 2xl:py-4 py-2"
    >
      <FaFacebook />
      <span>With Facebook</span>
    </button>
  );
};

export default FacebookSignIn;
