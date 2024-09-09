import React from "react";
import Image from "next/image";
import Image_choose from "../public/app.png";

function Why_Choose() {
  return (
    <section className="why p-0 md:py-1 md:px-12">
      <div className="container my-24 md:my-0 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div className="grid gap-2 md:gap-4">
          {" "}
          <div>
            {" "}
            <h4 className="text-[#5E17EB] mb-1 md:mb-1 font-semibold">
              WHY CHOOSE US
            </h4>
            <h2 className="text-4xl md:text-5xl font-semibold">
              I.T{"'"}s all that matters
            </h2>
          </div>
          <p className="text-sm">
            At Maxtech Technology Solutions, we combine innovation, expertise,
            and a client-first approach to deliver custom technology solutions
            that are as unique as your business. Our team of dedicated
            engineers, developers, and designers works hand-in-hand with you to
            understand your goals and challenges, crafting solutions that are
            not only cutting-edge but also scalable, reliable, and aligned with
            your long-term vision. Whether you need advanced automation,
            high-performance software, or intuitive apps, we go beyond
            expectations to ensure you have the tools to thrive in a rapidly
            evolving digital landscape.
          </p>
        </div>
        <div>
          <Image
            src={Image_choose}
            width={500}
            height={500}
            alt="Why choose us image"
          />
        </div>
      </div>
    </section>
  );
}

export default Why_Choose;
