import Link from "next/link";
import { SiGithub } from "react-icons/si";
export default function Project(props) {
  const data = [{}];
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex flex-col break-words items-center w-9/12">
        <h1 className="font-oswald font-bold text-white text-justify text-xl">
          Some projects I’ve created in my self taught journey.
        </h1>
        <p className="text-white font-SourceSansPro text-justify">
          These are the collections of my personal projects i accumulated along
          the years with different technologies used
        </p>
      </div>
      <div className="bg-slate-600 h-64 w-80 flex items-center justify-center my-4">
        <h1>Project Image</h1>
      </div>

      <div className="w-10/12">
        <p className="text-yellow-500 font-oswald font-normal text-mds">
          WEB APPLICATION
        </p>
        <h1 className="text-white font-oswald font-bold text-2xl">
          Project Title
        </h1>
      </div>
      <p className="w-10/12 text-white font-SourceSansPro font-normal text-justify">
        A web based self-assessment and e-journal system with chatbot and
        student counselor assistance for troubled student in STI College
        Novaliches.
      </p>
      <div className="flex flex-row text-red-500 font-SourceSansPro font-normal w-10/12 my-3">
        <p>Categories</p>
      </div>
      <div className="flex flex-row w-10/12 justify-around">
        <Link href="/">
          <div className="flex flex-row items-center bg-slate-300 font-oswald font-normal text-lg rounded-md w-32 ">
            <SiGithub className="h-6 w-6 mx-2" />
            View Repo
          </div>
        </Link>
        <Link
          href="/"
          className="bg-slate-300 font-oswald font-normal text-lg rounded-md w-32"
        >
          <div className="flex justify-center items-center bg-slate-300 font-oswald font-normal text-lg rounded-md w-32 ">
            Launch Website
          </div>
        </Link>
      </div>
    </div>
  );
}
