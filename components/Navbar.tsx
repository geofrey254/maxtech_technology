"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// icons
import { BiMenuAltRight } from "react-icons/bi";
import {
  FaArrowAltCircleRight,
  FaFacebook,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  function handleNav() {
    setMenuOpen(!menuOpen);
  }
  return (
    <nav className="fixed w-full h-20 bg-[#5E17EB]">
      <div className="flex justify-between items-center h-full w-full px-4 md:px-20">
        <div className="left-nav">
          <Image src="/logo2.png" width={150} height={150} alt="Maxtech Logo" />
        </div>
        <div className="middle-nav hidden md:flex">
          <ul className="flex gap-12 text-white font-medium">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Solutions</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="right-nav">
          <Link
            href="#"
            className="text-[#5E17EB] bg-white rounded-3xl p-2 items-center hidden md:flex gap-2"
          >
            Get Started
            <FaArrowAltCircleRight />
          </Link>
          <div>
            <BiMenuAltRight
              size={50}
              className="text-white md:hidden"
              onClick={handleNav}
            />
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={
          menuOpen
            ? "nav_anim fixed w-[100%] h-[26rem] bg-[#5E17EB]"
            : "transition ease-in-out delay-150 duration-300 collapse"
        }
      >
        <ul className="flex flex-col gap-6 text-white font-medium mt-12 ml-12">
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Solutions</li>
          <li>Contact Us</li>
        </ul>
        <div className="mt-12">
          <ul className="flex justify-around items-center text-4xl text-white">
            <li>
              <Link href="#">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaInstagramSquare />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
