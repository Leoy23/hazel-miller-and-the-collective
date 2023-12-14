import Image from "next/image";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import Link from "next/link";
import logo from "@/public/HM&C.png";
import wholeBand from "@/public/wholeband.jpeg";
import hazelHandUp from "@/public/hazel-hand-up.jpg";
import bAndw from "@/public/hazel-b&w.jpg";
import Bio from "./components/Bio";
import Music from "./components/Music";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center text-white bg-red">
      <div className="flex flex-col justify-between items-center h-screen">
        <div className="m-9">
          <h1 className="text-5xl lg:text-8xl text-center">
            HAZEL MILLER & THE COLLECTIVE
          </h1>
        </div>
        <div className="carousel w-2/4">
          <div id="item1" className="carousel-item w-full">
            <Image src={wholeBand} alt="logo" className="w-full" />
          </div>
          <div id="item2" className="carousel-item w-full">
            <Image src={hazelHandUp} alt="logo" className="w-full" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <Image src={bAndw} alt="logo" className="w-full" />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a
            href="#item1"
            className="btn btn-xs rounded-full bg-red border-white"
          >
            1
          </a>
          <a
            href="#item2"
            className="btn btn-xs rounded-full bg-red border-white"
          >
            2
          </a>
          <a
            href="#item3"
            className="btn btn-xs rounded-full bg-red border-white"
          >
            3
          </a>
        </div>
        <div className="flex">
          <Link href={"/"}>
            <CiFacebook
              size={40}
              className="hover:text-maroon hover:cursor-pointer"
            />
          </Link>
          <Link href={"/"}>
            <CiInstagram
              size={40}
              className="hover:text-maroon hover:cursor-pointer"
            />
          </Link>
          <Link href={"/"}>
            <CiYoutube
              size={40}
              className="hover:text-maroon hover:cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
