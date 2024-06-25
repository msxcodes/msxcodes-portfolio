"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { isThenable } from "next/dist/client/components/router-reducer/router-reducer-types";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    skill_name: string;
    des?: string;
    Image: string;
    width?: number;
    height?: number;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item, idx) => (
        <div
          className="relative group cursor-pointer"
          key={item.skill_name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 1 }}
                animate={{
                  opacity: 1,
                  y: -10,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black/50 backdrop-filter backdrop-blur-2xl z-50 shadow-xl px-4 py-2"
              >
                <div
                  className="absolute inset-x-1
                0 z-30 w-[80%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px "
                />
                <div className="absolute left-10 w-[60%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-white relative z-30 text-base">
                  {item.skill_name}
                </div>
                <div className="text-white text-xs">{item.des}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            width={item.width}
            height={item.height}
            src={item.Image}
            alt={item.skill_name}
            className={`!m-0 !p-0 object-top  group-hover:scale-125 group-hover:z-30 border-white  relative transition duration-500`}
          />
        </div>
      ))}
    </>
  );
};
