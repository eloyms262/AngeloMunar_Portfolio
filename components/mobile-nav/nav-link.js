import Link from "next/link";
import { useRouter } from "next/router";
import { Text } from "@chakra-ui/react";
export default function NavLink(props) {
  const router = useRouter();
  return (
    <div>
      <Link href={props.link}>
        <Text
          className={
            (router.isPreview == props.link
              ? "text-green-700  font-bold"
              : "border-transparent text-[#1B2E55] text-2xl flex flex-col items-center mt-7 font-bold") +
            " p-2"
          }
          target="#projects"
        >
          {props.navName}
        </Text>
      </Link>
    </div>
  );
}
