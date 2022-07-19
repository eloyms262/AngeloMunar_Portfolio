import Image from "next/image";
import { BsFillCircleFill } from "react-icons/bs";
export default function AboutSection() {
  return (
    <div
      id="about-me"
      className="w-11/12 flex flex-col mx-auto items-center bg-white rounded-3xl my-8 pb-11"
    >
      <span className="my-4 flex flex-row items-center">
        <BsFillCircleFill className="text-green-500 h-3 w-3 mx-2" /> Status:
        Available for Work
      </span>
      <h1 className="font-oswald text-4xl font-bold text-[#1B2E55] my-3">
        Who I Am
      </h1>

      <Image
        src="/images/myself.png"
        className=" rounded-full bg-slate-400  bg-center my-4"
        width={240}
        height={224}
      />
      <span className="w-9/12 text-justify font-SourceSansPro ">
        Well hello there, I am Angelo and currently looking for oppurtunities to
        kickstart my career in the field of Front-end Development and gain
        valuable experiences.
        <br />
        <br /> I am taking up Computer Science at STI College and currently self
        studying for 1 year and now i am ready to take the step to become a
        developer in this field.
      </span>
    </div>
  );
}
