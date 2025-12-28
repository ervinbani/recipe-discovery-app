import "../styles/recipe-detail.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface RecipeDetail {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  [key: string]: any;
}

export default function RecipeDetail() {
  const { recipeId } = useParams<{ recipeId: string }>();
  const [recipe, setRecipe] = useState<RecipeDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  // Placeholder gestione preferiti locale (verrà sostituito con context/hook)
  useEffect(() => {
    if (!recipeId) return;
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favs.includes(recipeId));
  }, [recipeId]);

  const handleFavorite = () => {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    let newFavs;
    if (isFavorite) {
      newFavs = favs.filter((id: string) => id !== recipeId);
    } else {
      newFavs = [...favs, recipeId];
    }
    localStorage.setItem('favorites', JSON.stringify(newFavs));
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    if (!recipeId) return;
    setLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Errore nel fetch della ricetta");
        return res.json();
      })
      .then((data) => {
        setRecipe(data.meals ? data.meals[0] : null);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [recipeId]);

  if (loading) return <div>Caricamento dettagli ricetta...</div>;
  if (error) return <div>Errore: {error}</div>;
  if (!recipe) return <div>Ricetta non trovata.</div>;

  // Ingredienti e misure
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <div className="recipe-detail">
      <h2>{recipe.strMeal}</h2>
      <button
        onClick={handleFavorite}
        style={{
          background: isFavorite ? '#ff9800' : '#eee',
          color: isFavorite ? '#fff' : '#222',
          border: 'none',
          borderRadius: '6px',
          padding: '0.5rem 1.2rem',
          fontWeight: 600,
          marginBottom: '1rem',
          cursor: 'pointer',
        }}
      >
        {isFavorite ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
      </button>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="detail-img"
      />
      <p>
        <strong>Cucina:</strong> {recipe.strArea}
      </p>
      <p>
        <strong>Categoria:</strong> {recipe.strCategory}
      </p>
      <h3>Ingredienti</h3>
      <ul>
        {ingredients.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <h3>Istruzioni</h3>
      <p>{recipe.strInstructions}</p>
      {recipe.strYoutube && (
        <p>
          <a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer">
            Video Ricetta
          </a>
        </p>
      )}
    </div>
  );
}
