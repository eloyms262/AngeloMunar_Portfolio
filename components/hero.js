import { Text } from "@chakra-ui/react";
import { ImLinkedin } from "react-icons/im";
import { BsGithub, BsChevronDoubleDown } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function HeroSection() {
  return (
    <div className=" mx-auto w-5/6 mt-20 lg:w-7/12 lg:h-screen lg:flex lg:flex-col lg:translate-y-40 ">
      <div className="lg:flex lg:flex-row-reverse lg:mx-auto lg:items-center">
        <div>
          <div className="">
            <h1 className="text-3xl text-white font-oswald font-bold lg:text-5xl">
              Hi! I&apos;m
            </h1>
            <Text
              className="text-5xl font-bold text-[#53BEDF] font-oswald lg:text-9xl"
              textShadow="1px 1px #000000"
            >
              Angelo Munar
            </Text>
          </div>
          <div className="mt-4">
            {
              <p className="text-white font-SourceSansPro lg:text-3xl">
                I’m a Computer Science Undergrad -{" "}
                <span className="text-yellow-400 font-SourceSansPro text-justify relative">
                  Aspiring Front-end Web developer.
                </span>{" "}
                Living in Metro Manila, Philipines.
              </p>
            }
          </div>
        </div>
        <div className="h-0.5 bg-white w-full mx-auto my-4 lg:w-0.5 lg:mx-2 lg:h-64"></div>
        <div className="flex flex-row items-center justify-center mt-3 lg:flex lg:flex-col ">
          <a
            href="https://www.linkedin.com/in/manolito-angelo-s-munar-7b5874192/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ImLinkedin className="text-white  h-8 w-8 lg:h-10 lg:w-10 mx-3 lg:my-3  " />
          </a>
          <a
            href="https://github.com/eloyms262"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsGithub className="text-white h-8 w-8 lg:h-10 lg:w-10 mx-3 lg:my-3" />
          </a>
          <button
            onClick={() => navigator.clipboard.writeText("eloyMs26@gmail.com")}
          >
            <AiFillMail className="text-white h-8 w-8 lg:h-10 lg:w-10 mx-3 lg:my-3 " />
          </button>
          <a href="/angelo_cv.pdf" download>
            <HiDocumentText className="text-white h-8 w-8 lg:h-10 lg:w-10 mx-3 lg:my-3" />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-8">
        <Link href={"#about-me"}>
          <div className="flex flex-col items-center justify-center">
            <a className="text-white font-SourceSansPro text-lg lg:text-2xl">
              More about me
            </a>
            <BsChevronDoubleDown className="text-white h-6 w-6 animate-bounce mt-5" />
          </div>
        </Link>
      </div>
    </div>
  );
}
