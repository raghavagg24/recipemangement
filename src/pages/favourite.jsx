
import RecipeCard from "../components/recipecard";
import { useRecipes } from "../context/recipecontext";

function Favourite() {
  const { recipes, favourites } = useRecipes();

  const favouriteRecipes = recipes.filter((recipe) =>
    favourites.includes(recipe.id)
  );

  return (
    <div className="container">
      <h1 className="page-title">My Favourite Recipes ❤️</h1>

      <div className="recipe-grid">
        {favouriteRecipes.length > 0 ? (
          favouriteRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p>No favourite recipes yet. Add some! ❤️</p>
        )}
      </div>
    </div>
  );
}

export default Favourite;
