"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface IData {
  id: number;
  skill_name: string;
  Image: string;
}

export default function ThreeDCardDemo({
  data,
  title,
}: {
  data: IData[];
  title: string;
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-purple-500/[0.2] transition-all duration-300 bg-black/20 border-purple-800/50  w-auto sm:w-[30rem] h-auto rounded-xl py-6 px-3 md:p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold bg-gradient-to-tr from-blue-300 to-purple-400 bg-clip-text text-transparent text-center w-full"
        >
          {title}
        </CardItem>

        <div className="flex flex-wrap items-center mt-4 gap-2 justify-center">
          {data.map((item) => {
            return (
              <CardItem
                key={item.id}
                as="p"
                translateZ="60"
                className="border p-1 px-2 items-center gradient-text border-slate-800 rounded-full text-sm max-w-sm mt-2 text-white/80 flex gap-2"
              >
                <span>
                  <Image src={item.Image} alt="icon" width={12} height={12} />
                </span>
                {item.skill_name}
              </CardItem>
            );
          })}
        </div>
      </CardBody>
    </CardContainer>
  );
}
