import Link from "next/link";
export default function DeskNav() {
  return (
    <div className="hidden lg:flex lg:flex-row lg:justify-around text-white lg:h-12 lg:w-3/6 lg:rounded-3xl lg:my-12 lg:mx-auto lg:items-center  lg:bg-slate-600">
      <div className="text-xl">
        <span>Angelo</span>
        <span>|</span>
        <span>Portfolio</span>
      </div>
      <div className="text-lg">
        <ul className="flex flex-row">
          <li className="mx-6">
            <Link href="/">Home</Link>
          </li>
          <li className="mx-6">
            <Link href="#about-me">About Me</Link>
          </li>
          <li className="mx-6">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="mx-6">
            <Link href="#my-contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
