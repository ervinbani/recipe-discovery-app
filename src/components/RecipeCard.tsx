import { FC } from "react";

interface RecipeCardProps {
  id: string;
  name: string;
  image: string;
  onClick?: () => void;
}

const RecipeCard: FC<RecipeCardProps> = ({ id, name, image, onClick }) => {
  return (
    <div className="meal-card" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
    </div>
  );
};

export default RecipeCard;
