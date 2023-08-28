import Head from "next/head";
import HomePage from "./HomePage/HomePage";
import { ThemeSwitch } from "@/components/atoms";
import { ActiveSectionContext } from "@/contex";
import ThemeContextProvider from "@/contex/ThemeContextProvider/ThemeContextProvider";

export default function Home() {
  return (
    <main>
      <Head>
        <title>M. Dhiya Ulhaq</title>
        <meta
          name="description"
          content="Biography Muhammad Dhiya Ulhaq"
          key="Frontend Developer"
        />
      </Head>
      <ThemeContextProvider>
        <ActiveSectionContext>
          <HomePage />
          <ThemeSwitch />
        </ActiveSectionContext>
      </ThemeContextProvider>
    </main>
  );
}
