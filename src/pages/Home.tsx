
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RecipeCategoryCard from "../components/RecipeCategoryCard";

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        if (!res.ok) throw new Error("Errore nel fetch delle categorie");
        return res.json();
      })
      .then((data) => {
        setCategories(data.categories);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Caricamento categorie...</div>;
  if (error) return <div>Errore: {error}</div>;

  return (
    <div className="categories-list">
      {categories.map((cat) => (
        <RecipeCategoryCard
          key={cat.idCategory}
          id={cat.idCategory}
          name={cat.strCategory}
          image={cat.strCategoryThumb}
          description={cat.strCategoryDescription}
          onClick={() => navigate(`/category/${cat.strCategory}`)}
        />
      ))}
    </div>
  );
}
