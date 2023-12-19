import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";

const Socials = () => {
  return (
    <>
      <div className="flex justify-center">
        <Link href={"/"}>
          <CiFacebook
            size={25}
            className="hover:text-maroon hover:cursor-pointer"
          />
        </Link>
        <Link href={"/"}>
          <CiInstagram
            size={25}
            className="hover:text-maroon hover:cursor-pointer"
          />
        </Link>
        <Link href={"/"}>
          <CiYoutube
            size={25}
            className="hover:text-maroon hover:cursor-pointer"
          />
        </Link>
      </div>
    </>
  );
};

export default Socials;
