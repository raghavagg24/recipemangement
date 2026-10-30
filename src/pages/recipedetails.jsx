
import { Link, useParams } from "react-router-dom";
import { useRecipes } from "../context/recipecontext";

function RecipeDetails() {
  const { id } = useParams();
  const { recipes, favourites, toggleFavourite } = useRecipes();

  const recipe = recipes.find((item) => item.id === id);

  if (!recipe) {
    return (
      <div className="container">
        <h2>Recipe not found!</h2>
        <Link to="/">Go Home</Link>
      </div>
    );
  }

  const isFavourite = favourites.includes(recipe.id);

  return (
    <div className="container details-container">
      <Link to="/" className="back-btn">← Back to Home</Link>

      <img
        className="details-image"
        src={recipe.image}
        alt={recipe.title}
        onError={(e) => {
          e.currentTarget.src = "https://placehold.co/800x500?text=Recipe";
        }}
      />

      <h1>{recipe.title}</h1>

      <p className="category">{recipe.category}</p>
      <p>⏱️ Cooking Time: {recipe.cookingTime}</p>

      <button
        className="fav-btn"
        onClick={() => toggleFavourite(recipe.id)}
      >
        {isFavourite ? "❤️ Remove Favourite" : "🤍 Add Favourite"}
      </button>

      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetails;
