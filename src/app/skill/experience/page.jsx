import Image from "next/image";
import Entry from "@/app/components/Entry/Entry";
import SampleIntroduction from "@/app/components/SampleIntroduction/SampleIntroduction";
import { AiFillGithub, AiFillLinkedin, AiOutlineX } from "react-icons/ai";
import Link from "next/link";
import "@/app/page.css";

export default function Page({ Component, pageProps }) {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex flex-row items-center justify-between px-40">
          <div className="flex-none min-w-60">
            <SampleIntroduction
              words={["Thinker", "Innoviator", "Pionner", "Developer"]}
              color={"blue"}
            />
          </div>
          <div className="relative w-80 h-80 bg-gray-300">
            <Image src="/imgs/head.jpg" layout="fill" objectFit="cover" alt=""/>
          </div>
          <div className="flex-none min-w-60">
            <SampleIntroduction
              words={["Web3", "AI", "Security"]}
              color={"red"}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-5">
        <div className="flex-auto">
          <div className="text-6xl font-serif">
            <span className="letter">T</span>
            <span className="letter">i</span>
            <span className="letter">m</span>
            <span className="letter">e</span>
            <span className="letter">L</span>
            <span className="letter">o</span>
            <span className="letter">r</span>
            <span className="letter">d</span>
          </div>
        </div>
        <div className="flex-auto mt-4">
          <div className="text-3xl font-serif">
            <span className="letter">C</span>
            <span className="letter">M</span>
            <span className="letter">U</span>
            <span className="spacing"></span>
            <span className="letter">P</span>
            <span className="letter">i</span>
            <span className="letter">t</span>
            <span className="letter">t</span>
            <span className="letter">s</span>
            <span className="letter">b</span>
            <span className="letter">u</span>
            <span className="letter">r</span>
            <span className="letter">g</span>
            <span className="letter">h</span>
          </div>
        </div>
        <div className="flex-auto text-3xl flex mt-3">
          <Link href="https://github.com/MxianD">
            <AiFillGithub />
          </Link>
          <Link href="https://x.com/laim_lord">
            <AiOutlineX />
          </Link>
          <Link href="https://www.linkedin.com/in/caiqing-shen-18a663234/">
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
      <hr className="mt-2" />

      <div className="flex items-center justify-center p-1 mt-5">
      <Entry color={"green"} section={"About"} directTo={"/about"}/>
      </div>
      <div className="flex items-center justify-evenly p-1">
          <Entry className="felx-auto" color={"purple"} section={"Project"} directTo={"/experience"} />
          <Entry className="felx-auto" color={"blue"} section={"Skill"} directTo={"/skill"}/>
      </div>
      <div className="flex items-center justify-between p-1">
          <Entry className="felx-auto" color={"yellow"} section={"Bookshelf"} directTo={"/bookshelf"}/>
          <Entry className="felx-auto" color={"red"} section={"Idea"} directTo={"/idea"}/>
      </div>
    </>
  );
}
