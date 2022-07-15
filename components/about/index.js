import Image from "next/image";

export default function AboutSection() {
  return (
    <div
      id="about-me"
      className="w-11/12 flex flex-col mx-auto items-center bg-white"
    >
      <span> Status: Available for Work</span>
      <h1>Who I AM</h1>
      <Image src="/images/myself.png" width={600} height={800} />
      <span></span>
    </div>
  );
}
