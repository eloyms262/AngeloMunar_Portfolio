import { Text } from "@chakra-ui/react";
import AboutSection from "../components/about";
import HeroSection from "../components/hero";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#1B2E55]">
      <HeroSection />
      <AboutSection />
    </div>
  );
}
