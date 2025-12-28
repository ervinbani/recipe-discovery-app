import { BackButton } from "../components/BackButton";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import { Spinner, ErrorMessage } from "../components/Feedback";
import "../styles/spinner.css";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResults() {
  const query = useQuery().get("q") || "";
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!query) {
      setMeals([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((res) => {
        if (!res.ok) throw new Error("Errore nel fetch dei risultati");
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
  }, [query]);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="meals-list">
      <BackButton />
      <h2>Risultati per: "{query}"</h2>
      <div className="meals-grid">
        {meals.length === 0 ? (
          <p>Nessuna ricetta trovata.</p>
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
