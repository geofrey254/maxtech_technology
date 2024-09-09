import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { SERVICES } from "@/constants";

import { motion, useScroll } from "framer-motion";

function Services() {
  return (
    <section className="services p-0 md:py-24">
      <div className="container my-24 md:mt-0">
        <h4 className="text-center text-[#5E17EB] mb-1 md:mb-4 font-semibold">
          SERVICES
        </h4>
        <h2 className="text-center text-3xl md:text-6xl text-nowrap font-semibold">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-20 md:mt-20 gap-12">
          {SERVICES.map((service, id) => (
            <Card
              key={id}
              className="border-0 rounded-3xl text-center shadow-md md:shadow-3xl shadow-[#4b4453] "
            >
              <div className="flex justify-center items-center mt-4">
                <Image
                  src={service.illustration}
                  width={150}
                  height={150}
                  alt={service.name}
                  className="bg-[#b0a8b9] rounded-full p-4 shadow-xl"
                />
              </div>
              <CardHeader className="grid gap-6">
                <CardTitle className="text-[#1a0c36] font-bold">
                  {service.name}
                </CardTitle>
                <CardDescription className="text-gray-700">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
