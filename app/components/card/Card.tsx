import Image, { StaticImageData } from "next/image"; // Next.js 사용 시

interface CardProps {
  image: StaticImageData | string;
  title: string;
  description: string;
  tag?: string;
  variant: "icon" | "image";
}

const CardComponent = ({
  image,
  title,
  description,
  tag,
  variant,
}: CardProps) => {
  const isIcon = variant === "icon";

  return (
    <article
      className={`${isIcon ? "md:w-65" : "overflow-hidden rounded-xl md:w-80 "}`}
    >
      <Image
        src={image}
        alt={title}
        className={`${isIcon ? "mx-auto md:mx-0 mb-10 md:mb-10" : "h-3/6"}`}
      />
      <div className={`${isIcon ? "" : "bg-white p-8"}`}>
        {tag && (
          <span
            className={`${isIcon ? "" : "block text-sm md:text-xl text-gray-600 mb-5"}`}
          >
            {tag}
          </span>
        )}
        {/* tag가 있을 때만 렌더링 */}
        <h3
          className={`${isIcon ? "text-2xl md:text-2xl md:text-left text-gray-700 md:mb-6" : "text-gray-700 text-lg md:text-xl mb-3"}`}
        >
          {title}
        </h3>
        <p
          className={`${isIcon ? "text-sm my-6 md:my-0 md:text-left text-gray-600 " : "text-gray-600"}`}
        >
          {description}
        </p>
      </div>
    </article>
  );
};

export default CardComponent;
