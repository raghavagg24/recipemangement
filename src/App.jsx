
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import AddRecipe from "./pages/addrecipe";
import Favourite from "./pages/favourite";
import RecipeDetails from "./pages/recipedetails";

import { RecipeProvider } from "./context/recipecontext";

function App() {
  return (
    <RecipeProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/favourites" element={<Favourite />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>

        <footer>
          <p>© 2026 RecipeHub | Made with ❤️</p>
        </footer>
      </BrowserRouter>
    </RecipeProvider>
  );
}

export default App;
