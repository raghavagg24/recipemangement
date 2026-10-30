
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        🍽️ RecipeHub
      </Link>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add-recipe">Add Recipe</NavLink>
        <NavLink to="/favourites">Favourites ❤️</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
