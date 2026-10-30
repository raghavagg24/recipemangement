
import { Link } from "react-router-dom";
import { useRecipes } from "../context/recipecontext";

function RecipeCard({ recipe }) {
  const { favourites, toggleFavourite, deleteRecipe } = useRecipes();

  const isFavourite = favourites.includes(recipe.id);

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title}
        onError={(e) => {
          e.currentTarget.src = "https://placehold.co/600x400?text=Recipe";
        }}
      />

      <div className="card-content">
        <span className="category">{recipe.category}</span>

        <h3>{recipe.title}</h3>

        <p>⏱️ {recipe.cookingTime}</p>

        <div className="card-buttons">
          <Link to={`/recipe/${recipe.id}`} className="view-btn">
            View Recipe
          </Link>

          <button
            className="fav-btn"
            onClick={() => toggleFavourite(recipe.id)}
          >
            {isFavourite ? "❤️" : "🤍"}
          </button>

          <button
            className="delete-btn"
            onClick={() => {
              if (window.confirm("Delete this recipe?")) {
                deleteRecipe(recipe.id);
              }
            }}
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
