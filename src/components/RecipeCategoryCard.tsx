import { FC } from "react";

interface RecipeCategoryCardProps {
  id: string;
  name: string;
  image: string;
  description: string;
  onClick?: () => void;
}

const RecipeCategoryCard: FC<RecipeCategoryCardProps> = ({
  id,
  name,
  image,
  description,
  onClick,
}) => {
  return (
    <div
      className="category-card"
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => {
        if (!onClick) return;
        if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={onClick ? `Open category ${name}` : `Category ${name}`}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description.slice(0, 100)}...</p>
    </div>
  );
};

export default RecipeCategoryCard;
