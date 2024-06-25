"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin-card";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motions/montion";

interface Itech {
  title: string;
  color: string;
}
interface ProjectCardProps {
  title: string;
  linkTitle: string;
  tech_stack: Itech[];
  imgSrc: any;
  link: string;
  des: string;
  time: number;
}

export default function ProjectCard({
  title,
  des,
  tech_stack,
  imgSrc,
  linkTitle,
  link,
  time,
}: ProjectCardProps) {
  return (
    <motion.div variants={slideInFromLeft(time)}>
      <PinContainer title={linkTitle}>
        <Link href={link}>
          <div className="flex basis-full flex-col p-1 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-max ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-white/80">
              {title}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-white/60 text-[0.85rem] font-medium line-clamp-2">
                {des}
              </span>
            </div>
            <div className="flex w-full rounded-lg mt-4" />
            <span className="h-[250px]">
              <Image src={imgSrc} alt="" className="size-full  object-cover" />
            </span>
            <div className="mt-2">
              {tech_stack.map((data, index: number) => {
                return (
                  <span
                    key={index}
                    style={{ color: `${data.color}` }}
                    className="opacity-70 text-xs font-semibold"
                  >
                    {data.title}
                    {tech_stack.length != index ? " " : null}
                  </span>
                );
              })}
            </div>
          </div>
        </Link>
      </PinContainer>
    </motion.div>
  );
}
