"use client";
import React, { useState } from "react";
import Image from "next/image";

// icons
import { BiMenuAltRight } from "react-icons/bi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  function handleNav() {
    setMenuOpen(!menuOpen);
  }
  return (
    <nav className="fixed w-full">
      <div className="flex justify-between items-center">
        <div className="left-nav">
          <Image src="/logo.png" width={150} height={150} alt="Maxtech Logo" />
        </div>
        <div className="middle-nav">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Solutions</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="right-nav">
          <BiMenuAltRight
            size={50}
            className="text-[#5E17EB] cursor-pointer"
            onClick={handleNav}
          />
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={
          menuOpen
            ? "fixed bg-[#5E17EB] w-[100%] h-96"
            : "flex justify-between items-center"
        }
      >
        <div className="left-nav">
          <Image src="/logo.png" width={150} height={150} alt="Maxtech Logo" />
        </div>
        <div className="right-nav">
          <BiMenuAltRight
            size={50}
            className="text-[#5E17EB] cursor-pointer"
            onClick={handleNav}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
