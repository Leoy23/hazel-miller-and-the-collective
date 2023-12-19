import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/HM&C.png";

const Navbar = () => {
  return (
    <header className="navbar bg-red">
      <nav className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-maroon rounded-box w-52"
          >
            <li>
              <Link href={"/#bio"}>BIO</Link>
            </li>
            <li>
              <Link href={"/#events"}>EVENTS</Link>
            </li>
            <li>
              <Link href={"/#press"}>PRESS</Link>
            </li>
            <li>
              <div>GALLERY</div>
              <ul className="p-2">
                <li>
                  <Link href={"/#photos"}>PHOTOS</Link>
                </li>
                <li>
                  <Link href={"/#videos"}>VIDEOS</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={"/#epk"}>EPK</Link>
            </li>
            <li>
              <Link href={"/#contact"}>CONTACT</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          <Image
            src={logo}
            alt="hmc logo"
            className="w-12 md:w-[3.5rem] lg:w-16"
          />
        </Link>
      </nav>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center">
          <li>
            <Link href={"/#bio"}>BIO</Link>
          </li>
          <li>
            <Link href={"/#events"}>EVENTS</Link>
          </li>
          <li>
            <details>
              <summary>GALLERY</summary>
              <ul className="p-2 bg-maroon">
                <li>
                  <Link href={"/#photos"}>PHOTOS</Link>
                </li>
                <li>
                  <Link href={"/#videos"}>VIDEOS</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href={"/#press"}>PRESS</Link>
          </li>
          <li>
            <Link href={"/#epk"}>EPK</Link>
          </li>
          <li className="btn bg-maroon border-maroon text-white hover:bg-white hover:text-maroon hover:border-white rounded-full">
            <Link href={"/#newsletter"}>JOIN OUR NEWSLETTER</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
