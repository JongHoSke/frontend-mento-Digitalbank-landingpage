import Image, { StaticImageData } from "next/image"; // Next.js 사용 시
import "./Card.module.css";

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
  return (
    <article className={`card-container ${variant} w-50`}>
      <Image src={image} alt={title} className="card-image" />
      <div className="card-content">
        {tag && <span className="card-tag">{tag}</span>}{" "}
        {/* tag가 있을 때만 렌더링 */}
        <h3 className="card-title text-left">{title}</h3>
        <p className="card-description text-left">{description}</p>
      </div>
    </article>
  );
};

export default CardComponent;
