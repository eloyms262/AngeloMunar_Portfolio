import MenuBtn from "./menu-btn";

export default function MainNav() {
  return (
    <div className="md:hidden">
      <div className="absolute container font-SourceSansPro flex flex-row items-center justify-end p-8 ">
        <MenuBtn />
      </div>
    </div>
  );
}
