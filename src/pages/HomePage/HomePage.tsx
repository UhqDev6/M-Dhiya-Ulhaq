import {
  About,
  Contact,
  Experience,
  Header,
  Intro,
  Project,
  Skill,
} from "@/components";
import { SectionDevier, ThemeSwitch } from "@/components/atoms";
import { ActiveSectionContext } from "@/contex";
import ThemeContextProvider from "@/contex/ThemeContextProvider/ThemeContextProvider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <div
      className={`${inter.className} bg-gray-50 text-gray-950 pt-28 sm-pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
    >
      <ThemeContextProvider>
        <ActiveSectionContext>
          <Header />
          <div className="flex flex-col items-center px-4">
            <Intro />
            <SectionDevier />
            <About />
            <Project />
            <Skill />
            <Experience />
            <Contact />
          </div>
          <ThemeSwitch />
        </ActiveSectionContext>
      </ThemeContextProvider>
    </div>
  );
}
