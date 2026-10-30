
import { useNavigate } from "react-router-dom";
import RecipeForm from "../components/recipeform";
import { useRecipes } from "../context/recipecontext";

function AddRecipe() {
  const { addRecipe } = useRecipes();
  const navigate = useNavigate();

  const handleAdd = (recipe) => {
    addRecipe(recipe);
    alert("Recipe added successfully!");
    navigate("/");
  };

  return (
    <div className="container">
      <h1 className="page-title">Add New Recipe 🍳</h1>
      <RecipeForm onAdd={handleAdd} />
    </div>
  );
}

export default AddRecipe;
