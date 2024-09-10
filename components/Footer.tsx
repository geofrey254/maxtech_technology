import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowAltCircleRight,
  FaFacebook,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";

function Footer() {
  return (
    <footer className="flex justify-center items-center h-full md:h-[60vh] xl:h-[40vh] pt-16 md:py-1 md:px-12">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0 md:gap-x-28 xl:gap-x-64 items-center">
        <div className="sect1 mb-12 md:mb-0">
          <Image
            src="/logo2.png"
            width={150}
            height={150}
            alt="Maxtech Logo"
            className="w-[200px] mb-4 md:mb-8"
          />
          <p className="text-white">
            Innovative Technology Solutions: Robotics & Automation, Software
            Development, PCB Design
          </p>
          <ul className="flex text-3xl text-white mt-4 md:mt-12">
            <li className="">
              <Link href="#">
                <FaFacebook />
              </Link>
            </li>
            <li className="ml-12">
              <FaLinkedin />
            </li>
            <li className="ml-12">
              <FaInstagramSquare />
            </li>
          </ul>
        </div>
        <div className="sect2 mb-12 md:mb-0">
          <h4 className="text-white text-3xl font-bold mb-4 md:mb-12">
            Quick Links
          </h4>
          <ul className="text-white list-disc gap-6">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="sect3 mb-12 md:mb-0">
          <h4 className="text-white text-3xl font-bold mb-4 md:mb-12">
            Contact Us
          </h4>
          <div className="grid gap-8">
            <div className="link_1 flex items-center gap-6 text-white">
              <FaPhoneAlt size={30} className="bg-[#5E17EB] text-white" />
              <div className="">
                {" "}
                <h6 className="md:text-sm">Call Us On:</h6>
                <Link href="#" className="font-bold text-nowrap text-md">
                  +254742 954513
                </Link>
              </div>
            </div>
            <div className="link_2 flex items-center gap-6 text-white">
              <IoIosMailUnread size={40} className="bg-[#5E17EB] text-white" />
              <div className="">
                {" "}
                <h6 className="md:text-sm">Quick Mail Us:</h6>
                <Link href="#" className="font-bold text-md">
                  info@maxtech.co.ke
                </Link>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
