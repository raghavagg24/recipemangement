
import { createContext, useContext, useEffect, useState } from "react";

const RecipeContext = createContext();

const initialRecipes = [
  {
    id: "1",
    title: "Paneer Butter Masala",
    category: "Lunch",
    cookingTime: "30 minutes",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800",
    ingredients: ["Paneer", "Tomato", "Butter", "Cream", "Spices"],
    instructions: "Prepare tomato gravy with butter and spices. Add paneer and cream. Cook for 10 minutes and serve hot."
  },
  {
    id: "2",
    title: "Vegetable Pasta",
    category: "Dinner",
    cookingTime: "25 minutes",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800",
    ingredients: ["Pasta", "Tomato", "Capsicum", "Onion", "Cheese"],
    instructions: "Boil pasta. Prepare vegetable sauce, mix pasta with sauce and add cheese."
  },
  {
    id: "3",
    title: "Chocolate Pancakes",
    category: "Breakfast",
    cookingTime: "20 minutes",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800",
    ingredients: ["Flour", "Milk", "Cocoa", "Sugar", "Chocolate"],
    instructions: "Mix all ingredients into a smooth batter. Cook pancakes on a pan and serve with chocolate."
  }
];

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(() => {
    try {
      const saved = localStorage.getItem("recipes");
      return saved ? JSON.parse(saved) : initialRecipes;
    } catch {
      return initialRecipes;
    }
  });

  const [favourites, setFavourites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favourites")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addRecipe = (recipe) => {
    setRecipes((prev) => [
      ...prev,
      { ...recipe, id: crypto.randomUUID() }
    ]);
  };

  const deleteRecipe = (id) => {
    setRecipes((prev) => prev.filter((recipe) => recipe.id !== id));
    setFavourites((prev) => prev.filter((item) => item !== id));
  };

  const toggleFavourite = (id) => {
    setFavourites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        favourites,
        addRecipe,
        deleteRecipe,
        toggleFavourite
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipes = () => useContext(RecipeContext);
