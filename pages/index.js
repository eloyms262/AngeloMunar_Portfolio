import { Text } from "@chakra-ui/react";
import AboutSection from "../components/about";
import Contact from "../components/contacts";
import Footer from "../components/footer";
import HeroSection from "../components/hero";
import Project from "../components/projects";
import TechStack from "../components/tech";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#1B2E55]">
      <HeroSection />
      <AboutSection />
      <TechStack />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
