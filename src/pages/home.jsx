
import { useState } from "react";
import RecipeCard from "../components/recipecard";
import { useRecipes } from "../context/recipecontext";

function Home() {
  const { recipes } = useRecipes();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || recipe.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container">
      <section className="hero">
        <h1>Discover Delicious Recipes 🍕</h1>
        <p>Find, create and save your favourite recipes.</p>
      </section>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Dessert</option>
          <option>Snacks</option>
        </select>
      </div>

      <h2 className="section-title">Explore Recipes</h2>

      <div className="recipe-grid">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p>No recipes found!</p>
        )}
      </div>
    </div>
  );
}

export default Home;
