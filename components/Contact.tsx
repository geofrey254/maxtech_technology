import React from "react";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";
import Image from "next/image";

function Contact() {
  return (
    <section className="contact bg-[#e8def3] py-12 md:p-10 xl:p-20" id="cont">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div className="left">
          <div className="mb-12 text-left md:text-left">
            <div className="flex gap-4 items-center">
              <h4 className="text-[#5E17EB] mb-1 md:mb-1 font-semibold">
                CONTACT US
              </h4>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold">
              We{"'"}re Ready To Talk If You Are
            </h2>
            <p className="mt-4">
              Progressively morph principle-centered e-markets without an
              expanded array of opportunities. Conveniently incubate e-tailers
              for extensive leadership skills. Holisticly extend leading-edge
              vortals vis-a-vis 24/7 e-markets. Appropriately evolve efficient
              functionalities with installed base relationships.
            </p>
          </div>
          <hr className="border-[#5E17EB]" />
          <div className="grid gap-6 md:flex md:gap-12 items-center mt-12">
            <div className="link_1 flex items-center gap-6 bg-white p-4 md:p-4 xl:p-8 rounded-xl">
              <FaPhoneAlt
                size={50}
                className="bg-[#5E17EB] text-white p-2 rounded-xl shadow-2xl shadow-[#5E17EB]"
              />
              <div className="">
                {" "}
                <h6 className="md:text-sm">Call Us On:</h6>
                <Link href="#" className="font-bold text-nowrap text-md">
                  +254742 954513
                </Link>
              </div>
            </div>
            <div className="link_2 flex items-center gap-6 bg-white p-4 md:p-4 xl:p-8 rounded-xl">
              <IoIosMailUnread
                size={50}
                className="bg-[#5E17EB] text-white p-2 rounded-xl shadow-2xl shadow-[#5E17EB]"
              />
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
        <div className="right">
          <h4 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Contact Us Now
          </h4>
          <form action="" className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {" "}
              <input
                type="text"
                className="h-12 rounded-2xl p-8"
                placeholder="Enter Name"
              />
              <input
                type="email"
                className="h-12 rounded-2xl p-8"
                placeholder="Enter Email"
              />
              <input
                type="text"
                className="h-12 rounded-2xl p-8"
                placeholder="Enter Subject"
              />
              <input
                type="tel"
                className="h-12 rounded-2xl p-8"
                placeholder="Enter Phone"
              />
            </div>
            <textarea
              className="block w-full rounded-2xl h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 md:h-48"
              name="message"
              placeholder="Message"
            ></textarea>
            <button className="mt-8 bg-[#5E17EB] w-full p-2 rounded-3xl text-white font-bold">
              Contact Us Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
