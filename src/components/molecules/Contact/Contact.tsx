import SectionHeading from "@/components/atoms/SectionHeading/SectionHeading";
import { useSectionInView } from "@/hooks";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);
  const handleSubmit = () => {};
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="
        mb-28 
        scroll-mt-28
        sm:mb-28
        w-[min(100%,38rem)]
        text-center
      "
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:uhqdev@gmail.com">
          uhqdev@gmail.com
        </a>{" "}
        or through this from.
      </p>
      <form className="mt-10 flex flex-col" onSubmit={handleSubmit}>
        <input
          className="
            h-14
            rounded-lg
            borderBlack
            p-4
          "
          type="email"
          placeholder="You`re email"
          required
          maxLength={500}
        />
        <textarea
          className="
            h-52
            my-3
            rounded-lg
            border
            borderBlack
            p-4
          "
          placeholder="You`re message"
          required
          maxLength={500}
        />
        <button
          type="submit"
          className="
            
            flex
            h-[3rem]
            w-[8rem]
            bg-gray-900
            text-white
            rounded-full
            outline-none
            transition-all
            items-center
            justify-center
            gap-2
            group
            focus:scale-110
            hover:scale-110
            active:scale-105
            hover:bg-gray-950
          "
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </button>
      </form>
    </motion.section>
  );
}
