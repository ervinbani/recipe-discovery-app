import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { useNavigate } from "react-router-dom";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export default function Favorites() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (favs.length === 0) {
      setMeals([]);
      setLoading(false);
      return;
    }
    Promise.all(
      favs.map((id: string) =>
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
          .then((res) => {
            if (!res.ok)
              throw new Error("Errore nel fetch delle ricette preferite");
            return res.json();
          })
          .then((data) => (data.meals ? data.meals[0] : null))
      )
    )
      .then((results) => {
        setMeals(results.filter(Boolean));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Caricamento preferiti...</div>;
  if (error) return <div>Errore: {error}</div>;

  return (
    <div className="meals-list">
      <h2>Le tue ricette preferite</h2>
      <div className="meals-grid">
        {meals.length === 0 ? (
          <p>Nessuna ricetta preferita.</p>
        ) : (
          meals.map((meal) => (
            <RecipeCard
              key={meal.idMeal}
              id={meal.idMeal}
              name={meal.strMeal}
              image={meal.strMealThumb}
              onClick={() => navigate(`/recipe/${meal.idMeal}`)}
            />
          ))
        )}
      </div>
    </div>
  );
}
