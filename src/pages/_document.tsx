import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="!scroll-smooth">
      <Head>
        <meta
          name="description"
          content="Biography Muhammad Dhiya Ulhaq"
          key="Frontend Developer"
        />
      </Head>
      <body>
        <div className="bg-[#fbe2e3] dark:bg-[#946263] absolute top-[-6rem] right-[11rem] h-[32.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb]  dark:bg-[#676394] absolute top-[-1rem] left-[-35rem] h-[32.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
