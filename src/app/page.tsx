import Hero from "@/components/Hero";
import Projects from "./projects/page";
import { FiMenu, FiX } from "react-icons/fi";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
    </main>
  );
}
