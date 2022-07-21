import {
  SiTailwindcss,
  SiChakraui,
  SiFigma,
  SiNextdotjs,
  SiReact,
  SiFirebase,
  SiJavascript,
  SiTypescript,
  SiHtml5,
} from "react-icons/si";
import { Tooltip } from "@chakra-ui/react";
export default function TechStack() {
  return (
    <div
      id="techs"
      className="bg-white flex flex-col items-center justify-center pb-8 "
    >
      {/* <svg
        width="130"
        height="110"
        viewBox="0 0 397 345"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M201.274 0.79517C266.369 -2.93085 339.752 5.32223 377.951 49.5569C414.963 92.4158 389.391 149.083 373.523 200.257C358.523 248.634 344.241 300.746 292.37 325.567C236.741 352.186 166.983 350.443 109.618 326.539C53.1583 303.011 14.8594 257.022 3.3966 205.149C-7.50043 155.836 14.7899 107.157 52.5278 68.1839C89.8633 29.6264 142.084 4.18316 201.274 0.79517Z"
          fill="url(#paint0_linear_921_127)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_921_127"
            x1="71.005"
            y1="282.088"
            x2="318.344"
            y2="26.3557"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#00416A" stop-opacity="0.88" />
            <stop offset="1" stop-color="#77A4D0" />
          </linearGradient>
        </defs>
      </svg> */}
      <h1 className="text-3xl font-oswald font-bold mt-4 mb-1 -translate-x-16 text-[#1B2E55]">
        My Tech Stack
      </h1>
      <div className="flex flex-col w-11/12">
        <h1 className="font-SourceSansPro text-xl  font-bold mx-auto my-4 text-[#1B2E55]">
          {" "}
          Design
        </h1>
        <div className="flex flex-row  justify-evenly">
          <Tooltip label="Tailwind CSS" placement="top">
            <button>
              <SiTailwindcss className="h-8 w-8 text-[#1B2E55]" />
            </button>
          </Tooltip>
          <Tooltip label="Chakra UI" placement="top">
            <button>
              <SiChakraui className="h-8 w-8 text-[#1B2E55]" />
            </button>
          </Tooltip>
          <Tooltip label="Figma" placement="top">
            <button>
              <SiFigma className="h-8 w-8 text-[#1B2E55]" />
            </button>
          </Tooltip>
        </div>
        <h1 className="font-SourceSansPro  text-xl font-bold mx-auto my-4 text-[#1B2E55]">
          Development
        </h1>
      </div>

      <div className="flex flex-col w-11/12">
        <div className="flex flex-row justify-evenly my-4 text-[#1B2E55]">
          <Tooltip abel="Next JS" placement="top">
            <button>
              <SiNextdotjs className="h-8 w-8 text-[#1B2E55]" />
            </button>
          </Tooltip>
          <Tooltip label="React JS" placement="top">
            <button>
              <SiReact className="h-8 w-8 text-[#1B2E55]" />
            </button>
          </Tooltip>
          <Tooltip label="Firebase" placement="top">
            <button>
              <SiFirebase className="h-8 w-8 text-[#1B2E55]" />
            </button>
          </Tooltip>
        </div>
        <div className="flex flex-row justify-evenly my-2 text-[#1B2E55]">
          <Tooltip label="Javascript" placement="top">
            <button>
              <SiJavascript className="h-8 w-8 text-[#1B2E55]" />
            </button>
          </Tooltip>
          <Tooltip label="Typescript" placement="top">
            <SiTypescript className="h-8 w-8 text-[#1B2E55]" />
          </Tooltip>
          <Tooltip label="HTML5" placement="top">
            <button>
              <SiHtml5 className="h-8 w-8 text-[#1B2E55]" />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
