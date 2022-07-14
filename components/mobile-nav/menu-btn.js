import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { HiMenu } from "react-icons/hi";
import NavLink from "./nav-link";
const navLinks = [
  { navName: "Home", link: "/" },
  { navName: "About Me", link: "#about-me" },
  { navName: "Projects", link: "#projects" },
  { navName: "Contacts", link: "#my-contacts" },
];
export default function MenuBtn() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <div>
      <button
        ref={btnRef}
        className="h-6 w-20 bg-white flex items-center text-black justify-center rounded-lg "
        onClick={onOpen}
      >
        Menu
        <HiMenu className="h-4 w-4 ml-1" />
      </button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"full"}
      >
        <DrawerOverlay />
        <DrawerContent onClick={onClose}>
          <DrawerHeader>Navigation</DrawerHeader>

          <DrawerBody>
            {navLinks.map((e) => (
              <NavLink navName={e.navName} link={e.link} key={e.navName} />
            ))}
          </DrawerBody>

          <DrawerFooter className="flex items-center justify-center mx-auto"></DrawerFooter>
          <DrawerCloseButton size={"lg"} padding={11} />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
