
import { useState } from "react";

function RecipeForm({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    category: "Breakfast",
    cookingTime: "",
    image: "",
    ingredients: "",
    instructions: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const recipe = {
      ...form,
      ingredients: form.ingredients
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      image: form.image || "https://placehold.co/600x400?text=Recipe"
    };

    onAdd(recipe);

    setForm({
      title: "",
      category: "Breakfast",
      cookingTime: "",
      image: "",
      ingredients: "",
      instructions: ""
    });
  };

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <label>Recipe Name</label>
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Enter recipe name"
        required
      />

      <label>Category</label>
      <select name="category" value={form.category} onChange={handleChange}>
        <option>Breakfast</option>
        <option>Lunch</option>
        <option>Dinner</option>
        <option>Dessert</option>
        <option>Snacks</option>
      </select>

      <label>Cooking Time</label>
      <input
        name="cookingTime"
        value={form.cookingTime}
        onChange={handleChange}
        placeholder="e.g. 30 minutes"
        required
      />

      <label>Image URL</label>
      <input
        name="image"
        value={form.image}
        onChange={handleChange}
        placeholder="Paste image URL"
      />

      <label>Ingredients</label>
      <textarea
        name="ingredients"
        value={form.ingredients}
        onChange={handleChange}
        placeholder="Paneer, Tomato, Butter..."
        required
      />

      <label>Instructions</label>
      <textarea
        name="instructions"
        value={form.instructions}
        onChange={handleChange}
        placeholder="Write recipe instructions..."
        required
      />

      <button type="submit" className="submit-btn">
        Add Recipe
      </button>
    </form>
  );
}

export default RecipeForm;
