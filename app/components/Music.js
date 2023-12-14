"use client";

import { useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

import Image from "next/image";
import { icons } from "react-icons";

const Music = () => {
  return (
    <section
      className="bg-[#A11111] text-white w-full h-screen flex flex-col justify-center items-center p-8"
      id="music"
    >
      <div>
        <h2 className="relative z-10 text-xl text-white text-center md:text-5xl">
          MUSIC
        </h2>
      </div>
      <section></section>
      <button>
        <IoIosArrowDown
          className="text-white mr-2 hover:text-purple-950"
          size={60}
        />
      </button>
    </section>
  );
};

//  background image css (from video)
/* relative, object-cover, object-position: center, w-full, h-full */

export default Music;
