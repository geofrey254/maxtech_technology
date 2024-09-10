import React from "react";
import Link from "next/link";

function CTA() {
  return (
    <section className="cta md:h-[40vh] py-12 md:p-10 xl:p-20 flex items-center">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 items-center">
        <div className="grid gap-2 md:gap-6">
          <h2 className="text-white text-2xl md:text-4xl font-bold">
            Transform Your Business with Cutting-Edge Tech Solutions
          </h2>
          <p className="text-white/65">
            From robotics and automation to software development and PCB design,
            we bring innovation to life.
          </p>
        </div>
        <div className="m-0 md:ml-20 xl:ml-80">
          <Link href="#" className="bg-white rounded-3xl p-4">
            Get Your Free Consultation Today!
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTA;
