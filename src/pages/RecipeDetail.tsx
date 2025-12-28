import { BackButton } from "../components/BackButton";
import "../styles/recipe-detail.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner, ErrorMessage } from "../components/Feedback";
import "../styles/spinner.css";

interface RecipeDetail {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  return (
    <div className="recipe-detail">
      <BackButton />
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

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!recipe) return <ErrorMessage message="Ricetta non trovata." />;

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
          background: isFavorite ? "#ff9800" : "#eee",
          color: isFavorite ? "#fff" : "#222",
          border: "none",
          borderRadius: "6px",
          padding: "0.5rem 1.2rem",
          fontWeight: 600,
          marginBottom: "1rem",
          cursor: "pointer",
        }}
      >
        {isFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
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
