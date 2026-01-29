import Image, { StaticImageData } from "next/image"; // Next.js 사용 시

interface CardProps {
  image: StaticImageData | string;
  title: string;
  description: string;
  tag?: string; // 하단 섹션에만 있으므로 '선택적(Optional)'으로 설정
  variant: "icon" | "image"; // 스타일 구분을 위한 타입
}

const CardComponent = ({
  image,
  title,
  description,
  tag,
  variant,
}: CardProps) => {
  return (
    <div className={`card-container ${variant}`}>
      <Image src={image} alt={title} className="card-image" />
      <div className="card-content">
        {tag && <span className="card-tag">{tag}</span>}{" "}
        {/* tag가 있을 때만 렌더링 */}
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default CardComponent;
