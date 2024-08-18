import Image from "next/image";
import Entry from "@/app/components/Entry/Entry";
import SampleIntroduction from "@/app/components/SampleIntroduction/SampleIntroduction";
import { AiFillGithub, AiFillLinkedin, AiOutlineX } from "react-icons/ai";
import Link from "next/link";

import "@/app/page.css";

export default function Page({ Component, pageProps }) {
  return (
    <>
      <div className="flex flex-row p-5">
        <div className="flex-none flex flex-row justify-start">
          <div className="relative w-40 h-60 bg-gray-300">
            <Image
              src="/imgs/Brief History of Humankind.jpg"
              layout={"fill"}
              objectFit="cover"
            />
          </div>
          <div className="font-serif w-60 p-3">
            <p className="font-bold text-2xl">Brief History of Humankind</p>
            <span></span>
          </div>
        </div>
        <div className="flex-none flex flex-row justify-start">
          <div className="relative w-40 h-60 bg-gray-300">
            <Image
              src="/imgs/Selected Works of Mao Zedong.jpg"
              layout={"fill"}
              objectFit="cover"
            />
          </div>
          <div className="font-serif w-60 p-3">
            <p className="font-bold text-2xl">Selected Works of Mao Zedong</p>
            <span></span>
          </div>
        </div>
        <div className="flex-none flex flex-row justify-start">
          <div className="relative w-40 h-60 bg-gray-300">
            <Image
              src="/imgs/Das Kapita.jpg"
              layout={"fill"}
              objectFit="cover"
            />
          </div>
          <div className="font-serif w-60 p-3">
            <p className="font-bold text-2xl">Das Kapita</p>
            <span></span>
          </div>
        </div>
        <div className="flex-none flex flex-row justify-start">
          <div className="relative w-40 h-60 bg-gray-300">
            <Image
              src="/imgs/The Road to Serfdom.jpg"
              layout={"fill"}
              objectFit="cover"
            />
          </div>
          <div className="font-serif w-60 p-3">
            <p className="font-bold text-2xl">The Road to SerfdomO</p>
            <span></span>
          </div>
        </div>
      </div>

      <div className="flex flex-row p-5">
        <div className="flex-none flex flex-row justify-start">
          <div className="relative w-40 h-60 bg-gray-300">
            <Image
              src="/imgs/The Prince.jpg"
              layout={"fill"}
              objectFit="cover"
            />
          </div>
          <div className="font-serif w-60 p-3">
            <p className="font-bold text-2xl">The Prince</p>
            <span></span>
          </div>
        </div>
        <div className="flex-none flex flex-row justify-start">
          <div className="relative w-40 h-60 bg-gray-300">
            <Image
              src="/imgs/Conjectures and Refutations.jpg"
              layout={"fill"}
              objectFit="cover"
            />
          </div>
          <div className="font-serif w-60 p-3">
            <p className="font-bold text-2xl">Conjectures and Refutations</p>
            <span></span>
          </div>
        </div>
        <div className="flex-none flex flex-row justify-start">
          <div className="relative w-40 h-60 bg-gray-300">
            <Image
              src="/imgs/Reality Is Broken.jpg"
              layout={"fill"}
              objectFit="cover"
            />
          </div>
          <div className="font-serif w-60 p-3">
            <p className="font-bold text-2xl">Reality Is Broken</p>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}
