/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-template-curly-in-string */
import React, {useEffect, useState} from 'react';
import * as globalconstants from './constants/global-constants';
import './App.css';
import Recipe from './components/Recipe';
import Jumbotron from './components/Jumbotron';

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${globalconstants.APP_ID}&app_key=${globalconstants.APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);    
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (  
    
    <div className="App">
    
      <Jumbotron />
   
        <form className="search-form" onSubmit={getSearch}>
          <input className="search-bar" 
          type="text"
          placeholder="Search by recipe or food, Ej: Persian Chicken or banana"
          value={search} 
          onChange={updateSearch}            
          />
          <button className="search-button" type="submit">
            search
          </button>
        </form>

        <div className="cont-subtitle">
          <p className="subtitle">Recommended recipes</p>
        </div>

        <div className="recipes">
          {recipes.map(recipe => (
            <Recipe 
              key={recipe.recipe.label}
              image={recipe.recipe.image}
              title={recipe.recipe.label}              
              calories={recipe.recipe.calories}    
              ingredients={recipe.recipe.ingredients}
            />
          ))};
        </div>
        <footer className="container-footer">
          <p className="text-footer">Recipes-app - 2020</p>
        </footer>
    </div>
  );
}

export default App;
