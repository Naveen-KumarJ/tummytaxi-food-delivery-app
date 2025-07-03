import { assets } from "../../assets/assets";
import { HiMenu } from "react-icons/hi";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="md:hidden text-2xl">
          <HiMenu />
        </button>
        <img src={assets.logo} alt="logo" className="h-10" />
      </div>
      <img
        src={assets.profile_image}
        alt="profile"
        className="h-10 w-10 rounded-full object-cover"
      />
    </div>
  );
};

export default Navbar;
