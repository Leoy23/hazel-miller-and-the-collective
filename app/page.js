"use client";

import Link from "next/link";
import Carousel from "./components/Carousel";
import logo from "@/public/HM&C.png";
import Bio from "./components/Bio";
import Music from "./components/Music";
import Footer from "./components/Footer";
import Shows from "./components/Shows";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center text-white bg-red">
      <div className="flex flex-col justify-between items-center">
        <div className="m-9 mt-36 flex flex-wrap">
          <h1 className="text-3xl lg:text-8xl text-center">
            HAZEL MILLER & THE COLLECTIVE
          </h1>
        </div>
      </div>
      <Carousel />
      <Bio />
      <Shows />
    </main>
  );
}
