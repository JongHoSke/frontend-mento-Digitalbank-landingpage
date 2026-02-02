import IntroDesktop from "@assets/bg-intro-desktop.svg";
import Mockup from "@assets/image-mockups.png";
import IntroMobile from "@assets/bg-intro-mobile.svg";
import InviteButton from "@components/button/InviteButton";
import Image from "next/image";
const FirstSection = () => {
  return (
    <section className="relative overflow-x-clip pt-[55vh] pb-15 bg-gray-50 md:pt-0 md:h-174 md:text-left ">
      <div className="relative text-center z-10 md:text-left md:ml-40 md:pt-32 md:max-w-xl ">
        <h1 className="text-4xl font-medium md:text-6xl md:font-bold">
          Next generation digital banking
        </h1>
        <p className="mt-6 px-2 md:px-0 md:text-left md:text-2xl text-gray-500 ">
          Take your financial life online. Your Digitalbank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>

        <InviteButton className="block mx-auto mt-10 md:mx-0 px-8 py-3" />
      </div>

      {/* 배경 + 목업 */}
      <Image
        src={IntroDesktop}
        alt="데스크탑 배경 목업 이미지"
        className="absolute hidden md:block md:scale-100 md:-top-65 md:-right-60"
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
        className="absolute -top-32 md:-top-35 md:scale-110 md:-right-32"
        priority
      />
    </section>
  );
};

export default FirstSection;
