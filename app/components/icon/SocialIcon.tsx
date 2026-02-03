import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";

interface SocialIconProps {
  href: string;
  src: string | StaticImageData; // SVG 이미지
  alt: string;
}

const SocialIcon = ({ href, src, alt }: SocialIconProps) => {
  return (
    <Link href={href} aria-label={alt} className="group">
      <Image
        src={src}
        alt={alt}
        // 필터를 사용하여 호버 시 색상을 변경하거나 투명도를 조절할 수 있습니다.
        className="transition-all duration-300 hover:brightness-125"
      />
    </Link>
  );
};

export default SocialIcon;
