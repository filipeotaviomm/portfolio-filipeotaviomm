import { Locale } from "@/config/it8n.config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
import { useMainContext } from "@/providers/mainContext";
import { stackData } from "@/utils/data";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const HomeSection = () => {
  const { language } = useMainContext();
  const blueWords = ["love", "developing", "adoro", "desenvolver"];

  const dict = getDictionaryUseClient(language as Locale);

  return (
    <section
      id="home"
      className="w-full px-[20px] pt-[115px] bg-gray-secondary md:pb-[90px] md:pr-[0px] lg:flex lg:flex-row lg:pl-[80px]"
    >
      <div className="flex flex-col gap-[30px] lg:w-[55%]">
        <div className="flex flex-row items-center gap-3 md:mt-[40px]">
          <Image
            className=""
            width={30}
            height={30}
            src="/brazil-flag.svg"
            alt="profile photo"
          />
          <h2 className="text-sm">{dict.home.presentation}</h2>
        </div>
        {language !== "pt-BR" ? (
          <div>
            <span className="text-md text-white-primary">I am a </span>
            <ReactTyped
              className="text-md text-purple-primary font-semibold"
              strings={[dict.home.front, dict.home.back, dict.home.full]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
          </div>
        ) : (
          <div>
            <span className="text-md text-white-primary">Eu sou um </span>
            <ReactTyped
              className="text-md text-purple-primary font-semibold"
              strings={[dict.home.front, dict.home.back, dict.home.full]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
          </div>
        )}

        <div className="text-xl font-bold">
          {dict.home.slogan.split(" ").map((word, index) =>
            blueWords.includes(word) ? (
              <span key={index} className="text-purple-primary">
                {word + " "}
              </span>
            ) : (
              <span key={index}>{word + " "}</span>
            )
          )}
        </div>
        <p className="text-gray-tertiary text-sm">{dict.home.present}</p>
        <div className="w-full flex flex-col gap-[20px] lg:flex-row lg:items-center lg:gap-[33px]">
          <button className="bg-purple-primary py-[10px] rounded-[5px] text-sm hover:bg-purple-secondary lg:py-[15px] lg:px-[30px]">
            {dict.home.projects}
          </button>
          <a
            className="py-[10px] border-[2px] border-white-primary rounded-[5px] text-center text-sm  hover:bg-white-primary hover:text-gray-primary lg:py-[15px] lg:px-[30px]"
            href=""
          >
            {dict.home.portCode}
          </a>
          <div className="flex justify-center">
            <a
              className="hover:brightness-75"
              href="https://github.com/filipeotaviomm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={55} />
            </a>
          </div>
        </div>
        <ul className="h-[130px] flex flex-row mt-[35px] gap-[90px] overflow-x-auto overflow-y-hidden md:mt-[90px] xs:flex-wrap xs:overflow-x-hidden xs:h-auto">
          {stackData.map((stack, index) => (
            <li key={index}>
              <stack.img
                // title={stack.title}
                data-title={stack.title}
                className="icon text-gray-tertiary"
                size={80}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden lg:flex lg:justify-end lg:w-[45%] lg:mt-[-920px]">
        <img src="/image-bg.svg" alt="image-bg" className="w-[550px] fixed" />
      </div>
    </section>
  );
};

export default HomeSection;
