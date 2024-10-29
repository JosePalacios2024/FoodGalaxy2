import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  // search for the recipe
  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes()
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  }

  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<></>} />
        </Routes>
      </BrowserRouter>
      <div className="container">
        <h2>¡Bienvenido a Food Galaxy!</h2>
        <SearchBar
          isLoading={isLoading}
          query={query}
          setQuery={setQuery}
          handleSubmit={handleSubmit}
        />
        <div className="recipes">

          {recipes ? recipes.map(recipe => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
            />
          )) : "No Results."}
        </div>
      </div>
    </div>
  );
}

export default App;
