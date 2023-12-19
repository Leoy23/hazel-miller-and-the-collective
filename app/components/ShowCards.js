import Image from "next/image";
import Link from "next/link";
import logo from "@/public/HM&C.png";

const ShowCards = () => {
  return (
    <div className="flex flex-col justify-center mb-4 md:mr-4 bg-black">
      <div className="w-16 p-3 bg-white text-center">
        <p className="text-maroon text-xl">21</p>
      </div>
      <div className="p-4">
        <Image src={logo} alt="band logo" />
      </div>
      <div className="text-center bg-maroon hover:bg-white hover:text-maroon w-full p-4">
        <Link href={"www.hazelmiller.biz"}>TICKETS</Link>
      </div>
    </div>
  );
};

export default ShowCards;
