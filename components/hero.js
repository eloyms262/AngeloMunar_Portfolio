import { Text } from "@chakra-ui/react";
import { ImLinkedin } from "react-icons/im";
import { BsGithub, BsChevronDoubleDown } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="h-screen mx-auto w-5/6 mt-20">
      <div className=" ">
        <div className="">
          <h1 className="text-3xl text-white font-oswald font-bold">Hi! I'm</h1>
          <Text
            className="text-5xl font-bold text-[#53BEDF] font-oswald"
            textShadow="1px 1px #000000"
          >
            Angelo Munar
          </Text>
        </div>
        <div className="mt-4">
          {
            <p className="text-white font-SourceSansPro ">
              I’m a Computer Science Undergrad -{" "}
              <span className="text-yellow-400 font-SourceSansPro text-justify relative">
                Aspiring Front-end Web developer.
              </span>{" "}
              Living in Metro Manila, Philipines.
            </p>
          }
        </div>
      </div>
      <div className="h-0.5 bg-white w-full mx-auto my-4 "></div>
      <div className="flex flex-row items-center justify-center mt-3">
        <ImLinkedin className="text-white  h-8 w-8 mx-3 " />
        <BsGithub className="text-white h-8 w-8 mx-3" />
        <AiFillMail className="text-white h-8 w-8 mx-3 " />
        <HiDocumentText className="text-white h-8 w-8 mx-3" />
      </div>
      <div className="flex flex-col items-center justify-center mt-8">
        <Link
          href={"#about-me"}
          className="text-white font-SourceSansPro text-lg"
        >
          More about me
        </Link>
        <BsChevronDoubleDown className="text-white h-6 w-6 animate-bounce mt-5" />
      </div>
    </div>
  );
}
