import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BsArrowRight,
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
import { useSectionInView } from "@/hooks";
import { useActiveSectionContext } from "@/contex/ActiveSectionContext/ActiveSectionContext";

type IProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};
const PresentationModal = (props: IProps) => {
  const { isOpen, onClose, onConfirm } = props;
  const [password, setPassword] = useState("");

  const handleConfirm = () => {
    // Perform password validation logic here
    if (password === "coto") {
      onConfirm();
    } else {
      alert("Incorrect password. Please try again 🤪😜😝😛");
    }
  };

  return (
    <div className={`modal ${isOpen ? "visible" : "hidden"}`}>
      <div className="modal-content">
        <span className="close cursor-pointer" onClick={onClose}>
          &times;
        </span>
        <p>Enter password 🤫</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="*******"
        />
        <button
          className="bg-black rounded-xl text-white p-2"
          onClick={handleConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { active, setActive, setTimeOfLastClick } = useActiveSectionContext();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPasswordConfirmed, setPasswordConfirmed] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handlePasswordConfirm = () => {
    // Perform any additional actions when the password is confirmed
    setPasswordConfirmed(true);
    handleModalClose(); // Close the modal
  };

  return (
    <section
      ref={ref}
      id="home"
      className="z-[998] relative mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://pbs.twimg.com/media/F3_6M38bEAAmTfM?format=png&name=small"
              alt="photo"
              width="192"
              height="192"
              quality="80"
              priority={true}
              className="h-50 w-50 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-6xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.2,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-10 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl sm:tracking-wider"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold text-4xl sm:text-6xl">
          Hi, I`m M. Dhiya Ulhaq.
        </span>{" "}
        as <span className="font-bold">Frontend Developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">
          Javascript, Typescript & Reactjs, Nextjs
        </span>
        .
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          // href="#contact"
          onClick={handleModalOpen}
          href={
            isPasswordConfirmed
              ? "https://wepik.com/share/9a9349a0-21e0-4607-a50b-71704934fe50#rs=link"
              : ""
          }
          className="
            bg-gray-900 
            text-white 
            px-7 
            py-3 
            flex 
            items-center 
            gap-2 
            rounded-xl
            outline-none
            focus:scale-110
            hover:scale-110
            hover:bg-gray-950
            active:scale-105
            transition
            group
          "
          // onClick={() => {
          //   setActive("Contact");
          //   setTimeOfLastClick(Date.now());
          // }}
        >
          Going to My Persentation{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <PresentationModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onConfirm={handlePasswordConfirm}
        />
        <a
          className="
            bg-white 
            px-7 
            py-3 
            flex 
            items-center 
            gap-2 
            rounded-xl
            outline-none
            focus:scale-110
            hover:scale-110
            active:scale-105
            transition
            group
            cursor-pointer
            border
            border-black/10
            dark:bg-white/10
          "
          href="/CV-Muhammad-Dhiya-Ulhaq.pdf"
          download
        >
          Download my CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="
            bg-white 
            p-4 
            text-gray-700 
            flex 
            items-center 
            gap-2 
            rounded-full
            outline-none
            focus:scale-[1.15rem]
            hover:scale-[1.15rem]
            hover:text-gray-950
            active:scale-105
            transition
            cursor-pointer
            border
            border-black/10
            dark:bg-white/10
            dark:text-white/60
          "
          href="https://www.linkedin.com/in/uhqdev/"
          target="_blank"
          title="Linkedin"
        >
          <BsLinkedin />
        </a>
        <a
          className="
            bg-white 
            p-4 
            text-gray-700 
            flex 
            items-center 
            gap-2 
            rounded-full
            outline-none
            focus:scale-[1.15rem]
            hover:scale-[1.15rem]
            hover:text-gray-950
            active:scale-105
            transition
            cursor-pointer
            border
            border-black/10
            dark:bg-white/10
            dark:text-white/60
          "
          href="https://github.com/UhqDev6"
          target="_blank"
          title="Github"
        >
          <BsGithub />
        </a>
        <a
          className="
            bg-white 
            p-4 
            text-gray-700 
            flex 
            items-center 
            gap-2 
            rounded-full
            outline-none
            focus:scale-[1.15rem]
            hover:scale-[1.15rem]
            hover:text-gray-950
            active:scale-105
            transition
            cursor-pointer
            border
            border-black/10
            dark:bg-white/10
            dark:text-white/60
          "
          href="https://www.instagram.com/uhqdev"
          target="_blank"
          title="Instagram"
        >
          <BsInstagram />
        </a>
      </motion.div>
    </section>
  );
}
