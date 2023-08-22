import Head from "next/head";
import HomePage from "./HomePage/HomePage";

export default function Home() {
  return (
    <main>
      <Head>
        <title>M. Dhiya Ulhaq</title>
        <meta
          name="description"
          content="Biography Muhammad Dhiya Ulhaq"
          key="Frontend Develper"
        />
      </Head>
      <HomePage />
    </main>
  );
}
