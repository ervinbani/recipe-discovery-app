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
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description.slice(0, 100)}...</p>
    </div>
  );
};

export default RecipeCategoryCard;
