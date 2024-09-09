import React from "react";
import Image from "next/image";
import Image_1 from "../public/arduino.jpg";
import Image_2 from "../public/pcb.jpg";
import Link from "next/link";

function About() {
  return (
    <section className="services pb-12 md:p-24 xl:p-72 bg-[#e8def3] flex flex-col justify-center items-center h-full md:h-[100vh] xl:h-[75vh]">
      <div className="container grid grid-cols-1 md:grid-cols-2 ">
        <div className="left_side mt-24 md:mt-0">
          <div className="image_wrapper">
            <Image
              src={Image_1}
              width={500}
              height={500}
              alt="arduino"
              className="image1 mb-0 md:mb-96 border-[20px] border-white w-[18rem] md:w-[28rem] shadow-lg shadow-[#5E17EB] rounded-xl"
            />
            <Image
              src={Image_2}
              width={500}
              height={500}
              alt="pcb"
              className="image2 ml-12 mt-24 md:ml-32 md:mt-32 border-[20px] border-white w-[18rem] md:w-[28rem] shadow-lg shadow-[#5E17EB] rounded-xl"
            />
          </div>
        </div>
        <div className="right grid gap-6 mt-96 md:mt-0">
          <h4 className="text-left text-[#5E17EB] mb-1 md:mb-4 font-semibold">
            ABOUT MAXTECH
          </h4>
          <h2 className="text-left text-3xl md:text-5xl font-bold text-[#1b0930]">
            Our Commitment to Excellence
          </h2>
          <p className="text-left ">
            At Maxtech Technology Solutions, we’re not just a technology
            company—we’re your partner in innovation.From intelligent robotics
            to state-of-the-art software, we specialize in transforming ideas
            into real-world solutions. Our expertise spans across automation,
            PCB design, and custom development for web and mobile applications,
            ensuring you have the technological edge you need to thrive in today
            {"'"}s fast-paced digital world.
          </p>
          <Link
            href="#"
            className="bg-[#5E17EB] hover:bg-[#B0A8B9] rounded-full w-2/3 md:w-1/3 p-4 text-white font-bold flex justify-center items-center"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
