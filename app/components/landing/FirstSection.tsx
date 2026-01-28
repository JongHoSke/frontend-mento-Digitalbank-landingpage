import IntroDesktop from "@assets/bg-intro-desktop.svg";
import Mockup from "@assets/image-mockups.png";
import Image from "next/image";
const FirstSection = () => {
  return (
    <section className="relative bg-gray-50 h-169 text-left overflow-x-clip">
      <div className="relative z-10 pl-40 pt-32 max-w-xl">
        <h1 className="text-5xl font-bold">Next generation digital banking</h1>
        <p className="mt-6  text-gray-500 ">
          Take your financial life online. Your Digitalbank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>

        <button className="mt-10 px-8 py-3 flex group relative rounded-full  bg-linear-to-bl from-green-400 from-30% to-cyan-300 text-white font-bold cursor-pointer">
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity" />
          Request Invite
        </button>
      </div>

      {/* 배경 + 목업 */}
      <Image
        src={IntroDesktop}
        alt="배경 목업 이미지"
        className="absolute -top-69 -right-110"
        priority
      />

      <Image
        src={Mockup}
        alt="배경 핸드폰 이미지"
        className="absolute -top-40 -right-32"
        priority
      />
    </section>
  );
};

export default FirstSection;
