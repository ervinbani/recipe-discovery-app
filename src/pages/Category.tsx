import "../styles/meals.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import { Spinner, ErrorMessage } from "../components/Feedback";
import "../styles/spinner.css";

import { useNavigate } from "react-router-dom";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export default function Category() {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!categoryName) return;
    setLoading(true);
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Errore nel fetch delle ricette");
        return res.json();
      })
      .then((data) => {
        setMeals(data.meals || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [categoryName]);

  if (loading) return <div>Caricamento ricette...</div>;
    if (error) return <ErrorMessage message={error} />;

  return (
    <div className="meals-list">
      <h2>Ricette per categoria: {categoryName}</h2>
      <div className="meals-grid">
        {meals.map((meal) => (
          <RecipeCard
            key={meal.idMeal}
            id={meal.idMeal}
            name={meal.strMeal}
            image={meal.strMealThumb}
            onClick={() => navigate(`/recipe/${meal.idMeal}`)}
          />
        ))}
      </div>
    </div>
  );
}
