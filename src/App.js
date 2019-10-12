import React, {useState, useEffect} from 'react';
import Form from "./components/Form"
import Recipes from "./components/Recipes"
import "bootstrap/dist/css/bootstrap.min.css";  
import './App.css';
// import { async } from 'q';

function App() {
  const API_KEY = "cf2499dec60ad219b2162afc8604848c"

  //create a state for managing the recipe display
  const [recipes, setRecipes] = useState([])
  const getRecipe = async (e) => {
    e.preventDefault()
    const recipesName = e.target.elements.recipeName.value
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipesName}&count=10`)
    const data = await api_call.json()
    setRecipes(data.recipes)
  }

  

  useEffect(() => {
    const json = localStorage.getItem("recipes")  
    const jsonRecipes = JSON.parse(json)
    setRecipes(jsonRecipes)
  }, []);

  useEffect(() => {
    // const currRecipe = JSON.stringify(recipes)
    localStorage.setItem("recipes", JSON.stringify(recipes))
    localStorage.setItem("author", "abayomi")
  }, [recipes]);
  return (
    <div className="main">
      <header className="my-3 text-center text-white heading">
        <h2>Recipe App</h2>
      </header>
      <div className="container mb-5">
        <div className="col-md-12 d-flex justify-content-center">
          <Form getRecipe={getRecipe}/>
        </div>
      </div>
      <div className="container">
          <Recipes recipes={recipes}/>
      </div>
      <footer className="mt-5">
        <div className="container-fluid text-center">
          <h4>Abayomi Olatunji | <a href="mailto:abayomi.olatunjio@gmail.com">abayomi.olatunjio@gmail.com</a></h4>
          <p>&copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
export default App;
