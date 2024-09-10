import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo3.png";

// icons
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero w-full mt-20 px-4 py-6 md:py-16 xl:py-44">
      <div className="container md:grid md:grid-cols-2 md:gap-20 items-center mt-4 p-0 md:px-12 xl:p-0">
        <div className="left flex flex-col gap-6 mb-8 mt-8 md:mt-0 md:mb-0">
          <div className="flex gap-12 md:gap-48 font-bold text-[#ffffff] text-sm md:text-lg">
            <h4>.HARWARE.</h4>
            <h4>.SOFTWARE.</h4>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#ffffff] leading-10 md:leading-[3.5rem]">
            Innovative{"  "}
            <span className="bg-[#ffffff] rounded-3xl p-1.5 text-[#5E17EB]">
              Technology{" "}
            </span>
            Solutions for a Smarter Future
          </h2>
          <p className="text-white text-sm">
            Empowering businesses with cutting-edge Robotics, Automation, PCB
            Design, Software, Web, and App Development services.
          </p>
          <Link
            href="#"
            className="text-white bg-[#5E17EB] rounded-3xl p-4 flex items-center justify-center w-1/2 md:w-1/3 xl:w-1/4 gap-4 font-bold "
          >
            About Us
            <FaArrowRight />
          </Link>
        </div>
        <div className="right ml-28">
          <Image
            src={Logo}
            width={600}
            height={600}
            alt=""
            className="w-[400px] hidden md:flex logo_hero"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
