import LogoLite from "@assets/logo-light.svg";
import Link from "next/link";
import Image from "next/image";
import Facebook from "@assets/icon-facebook.svg";
import Youtube from "@assets/icon-youtube.svg";
import Twitter from "@assets/icon-twitter.svg";
import Pinterest from "@assets/icon-pinterest.svg";
import Instagram from "@assets/icon-instagram.svg";
import SocialIcon from "@components/icon/SocialIcon";
import InviteButton from "@/app/components/button/InviteButton";
const Footer = () => {
  const socialDatas = [
    { id: 1, src: Facebook, alt: "Facebook", href: "https://facebook.com" },
    { id: 2, src: Youtube, alt: "Youtube", href: "https://youtube.com" },
    { id: 3, src: Twitter, alt: "Twitter", href: "https://twitter.com" },
    { id: 4, src: Pinterest, alt: "Pinterest", href: "https://pinterest.com" },
    { id: 5, src: Instagram, alt: "Instagram", href: "https://instargram.com" },
  ];

  const linkDatas = [
    { id: 1, alt: "About Us" },
    { id: 2, alt: "Contact" },
    { id: 3, alt: "Blog" },
    { id: 4, alt: "Careers" },
    { id: 5, alt: "Support" },
    { id: 6, alt: "Privacy Policy" },
  ];

  return (
    <>
      <footer className="pt-10 pb-16 md:px-42 bg-blue-950 ">
        <div className="flex flex-col items-center md:flex-row gap-8 md:gap-0 md:max-w-375 ">
          <div className="items-center md:items-start md:w-1/5">
            <Link
              href={"/"}
              className=" flex justify-center mb-10 md:mb-15 md:justify-start"
            >
              <Image src={LogoLite} alt="라이트 로고" width={165} />
            </Link>
            <div className="flex gap-5">
              {socialDatas.map((social) => {
                return (
                  <SocialIcon
                    key={social.id}
                    src={social.src}
                    alt={social.alt}
                    href={social.href}
                  />
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-30 gap-y-3 text-center md:text-left text-white md:ml-12">
            {linkDatas.map((link) => (
              <Link
                key={link.id}
                href="/"
                className="hover:text-green-500 transition-colors"
              >
                {link.alt}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-end md:ml-auto">
            <InviteButton className="mb-5 py-2.5 w-40" />
            <span className="text-gray-600 block md:mt-5">
              © Digitalbank. All Right Reserved
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
