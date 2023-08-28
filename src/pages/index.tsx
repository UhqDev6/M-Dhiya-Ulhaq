import Head from "next/head";
import { ThemeSwitch } from "@/components/atoms";
import { ActiveSectionContext } from "@/contex";
import ThemeContextProvider from "@/contex/ThemeContextProvider/ThemeContextProvider";
import HomePage from "./HomePage/HomePage";

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
      <HomePage />
    </main>
  );
}
