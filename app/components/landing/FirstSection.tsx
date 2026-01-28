import IntroDesktop from "@assets/bg-intro-desktop.svg";
import Mockup from "@assets/image-mockups.png";
import IntroMobile from "@assets/bg-intro-mobile.svg";
import Image from "next/image";
const FirstSection = () => {
  return (
    <section className="relative overflow-x-clip pt-[55vh] h-dvh bg-gray-50 md:h-169 md:text-left ">
      <div className="relative text-center z-10 md:pl-40 md:pt-32 md:max-w-xl">
        <h1 className="text-4xl font-extrabold md:text-5xl md:font-bold">
          Next generation digital banking
        </h1>
        <p className="mt-6 px-5 text-gray-500 ">
          Take your financial life online. Your Digitalbank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>

        <button className="block mx-auto mt-10 px-8 py-3 md:flex group relative rounded-full bg-linear-to-bl from-green-400 from-30% to-cyan-300 text-white font-bold cursor-pointer">
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity" />
          Request Invite
        </button>
      </div>

      {/* 배경 + 목업 */}
      <Image
        src={IntroDesktop}
        alt="데스크탑 배경 목업 이미지"
        className="absolute hidden md:block md:scale-100 md:-top-69 md:-right-110"
        priority
      />

      <Image
        src={IntroMobile}
        alt="모바일 배경 목업 이미지"
        className="absolute -top-10 right-0 md:hidden"
        priority
      />

      <Image
        src={Mockup}
        alt="배경 핸드폰 이미지"
        className="absolute -top-34 md:-top-40 md:-right-32"
        priority
      />
    </section>
  );
};

export default FirstSection;
