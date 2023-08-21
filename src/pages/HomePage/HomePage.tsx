import { About, Header, Intro, Project } from "@/components";
import { SectionDevier } from "@/components/atoms";
import { ActiveSectionContext } from "@/contex";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <div
      className={`${inter.className} bg-gray-50 text-gray-950 pt-28 sm-pt-36`}
    >
      <ActiveSectionContext>
        <Header />
        <div className="flex flex-col items-center px-4">
          <Intro />
          <SectionDevier />
          <About />
          <Project />
        </div>
      </ActiveSectionContext>
    </div>
  );
}
