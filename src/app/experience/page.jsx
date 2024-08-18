import Image from "next/legacy/image";
import Entry from "@/app/components/Entry/Entry";
import SampleIntroduction from "@/app/components/SampleIntroduction/SampleIntroduction";
import { AiFillGithub, AiFillLinkedin, AiOutlineX } from "react-icons/ai";
import Link from "next/link";

import "@/app/page.css";

export default function Page({ Component, pageProps }) {
  return (
    <>
      <div className="flex flex-row p-5">
        <div className="flex-auto flex flex-row justify-start">
          <div className="relative w-80 h-80 bg-gray-300">
            <Image
              src="/imgs/MetaBuilderDAO.jpg"
              layout={"fill"}
              objectFit="cover"
            />
          </div>
          <div className="font-serif w-96 p-3">
            <span className="font-bold text-xl">Oct. 2022</span>
            <span className="font-bold text-xl ml-20 text-rose-600">
              Proccessing
            </span>
            <p className="font-bold text-2xl">MetaBuilder DAO</p>
            <span>
              I found that there are many unfair aspects in the society, and the
              most effective way to address this is by building a new system
              wthat allows disadvantaged individuals to receive help from others
              rather than relying solely on government support. MetaBuilder DAO
              creates a simulated world where people have their skills and
              development histories recorded, enabling them to showcase their
              potential and integrate into work and life.
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row p-5">
        <div className="flex-auto flex flex-row justify-start">
          <div className="relative w-80 h-80 bg-gray-300">
            <Image src="/imgs/fire.jpg" layout={"fill"} objectFit="cover" />
          </div>
          <div className="font-serif w-96 p-3">
            <p className="font-bold text-xl">Mar. 2022</p>
            <p className="font-bold text-2xl">
              Fire Sentry - A Highly Sensitive Smoke Detection System
            </p>
            <span>
              After I created a company successfully, I had an opportunity to
              start a high-tech company. This company uses AI technology to
              detect potential fires. We deployed our products in several forest
              farms and timber companies.
            </span>
          </div>
        </div>
        <div className="flex-auto flex flex-row justify-start">
          <div className="relative w-80 h-80 bg-gray-300">
            <Image
              src="/imgs/0risk.jpg"
              layout={"fill"}
              objectFit="cover"
            />
          </div>
          <div className="font-serif w-96 p-3">
            <span className="font-bold text-xl">Oct. 2022</span>
            <span className="font-bold text-xl ml-20 text-rose-600">
              Proccessing
            </span>
            <p className="font-bold text-2xl">0risk DAO</p>
            <span>
            I have noticed that many people have significant misunderstandings about Web3 and blockchain, and they find it challenging to
             get started in this field. I joined the founding of 0risk DAO, which is dedicated to addressing this issue.
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row p-5">
        <div className="flex-auto flex flex-row justify-start">
          <div className="relative w-80 h-80 ">
            <Image src="/imgs/children.jpg" layout={"fill"} objectFit="cover" />
          </div>
          <div className="font-serif w-96 p-3">
            <p className="font-bold text-xl">May. 2021</p>
            <p className="font-bold text-2xl">
              "Guarding Children's Hearts" Rural Teaching
            </p>
            <span>
              As a Leader of teachers, I recurited teachers and led the
              Teachers' Group to provide voluntary teaching services to students
              in rural areas. In this experience, I noticed that countryside
              students need more resource and help so that they can show their
              potential.
            </span>
          </div>
        </div>
        <div className="flex-auto flex flex-row justify-start">
          <div className="relative w-80 h-80 bg-gray-300">
            <Image src="/imgs/travel.jpg" layout={"fill"} objectFit="cover" />
          </div>
          <div className="font-serif w-96 p-3">
            <p className="font-bold text-xl">Apr. 2022</p>
            <p className="font-bold text-2xl">
              Travel Planning System for Individuals
            </p>
            <span>
              As an undergraduate in China, I find that many students have needs
              to travel around when they finish their study. However, they do
              not choose to travel around because they do not want to spend time
              planning their travel. So I organized some teammates to work with
              me, and developed a travel planning system together which
              cooperates with some companies.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
