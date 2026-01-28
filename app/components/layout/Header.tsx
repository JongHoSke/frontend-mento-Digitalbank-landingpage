"use client";

import LogoDark from "@assets/logo-dark.svg";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "@assets/icon-hamburger.svg";
import Close from "@assets/icon-close.svg";
import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "About", "Contact", "Blog", "Careers"];

  return (
    <header className="flex justify-between px-5 md:justify-around md:px-0 h-18 relative bg-white z-100">
      {/* 로고 이미지 */}
      <Link href={"/"} className="logo flex justify-center">
        <Image src={LogoDark} alt="로고 이미지" />
      </Link>

      {/* 네비게이션 탭 pc */}
      <nav className="hidden md:block">
        <ul className="md:flex">
          {menuItems.map((menu, idx) => {
            return (
              <li
                key={idx}
                className="p-5 text-2xl text-gray-400 font-medium cursor-pointer"
              >
                <span className="border-b-4 border-transparent hover:border-green-500 transition-all pb-4 cursor-pointer">
                  {menu}
                </span>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* 더보기 버튼 */}
      <div className="hidden md:flex group relative  m-3 w-50 h-12 justify-center bg-linear-to-bl from-green-400 from-30% to-cyan-300 rounded-4xl cursor-pointer">
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity" />
        <button className="cursor-pointer text-white font-bold ">
          Request Invite
        </button>
      </div>

      {/* 네비게이션 탭 mobile */}
      <button className="visible md:hidden">
        <Image
          src={isOpen ? Close : Hamburger}
          alt={isOpen ? "닫기" : "메뉴 열기"}
          onClick={() => setIsOpen(!isOpen)}
        />
      </button>

      {/* 네비게이션 탭 mobile */}
      {isOpen && (
        <div className="absolute p-10  text-gray-400 bg-white inset-x-6 text-center top-24 rounded-md md:hidden ">
          <nav className=" md:hidden">
            <ul className="md:flex">
              {menuItems.map((menu, idx) => {
                return (
                  <li key={idx} className="p-2 text-2xl cursor-pointer">
                    <span className="cursor-pointer">{menu}</span>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
