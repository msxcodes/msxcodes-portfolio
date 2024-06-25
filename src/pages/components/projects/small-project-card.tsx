import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import blog from "../../../../public/projects/blogxweb.png";
import { BsGithub } from "react-icons/bs";

export const MiniProjectCard = () => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black/10 border-slate-800  w-auto sm:w-[20rem] h-auto rounded-xl border ] px-4 py-3">
        <CardItem className="relative" translateZ={"60"}>
          <span className="opacity-90 ">
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-[200px] object-cover "
              src={blog.src}
            />
          </span>
          <div className="absolute bottom-0 backdrop-filter backdrop-blur-2xl flex justify-between w-full px-4 bg-black/20 py-2 items-center z-40">
            <div className="flex gap-2 items-center">
              <div className="flex flex-col ">
                <p className="text-tiny text-white">BlogX</p>
                <p className="text-tiny text-white/60">It is a blog website</p>
              </div>
            </div>
            <Button
              radius="full"
              size="sm"
              className="bg-black/20 text-white  cursor-pointer"
            >
              <BsGithub />
              Code
            </Button>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};
