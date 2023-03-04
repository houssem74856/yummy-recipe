import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import heart from "../../pngs/heart.png";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/features/favorites/favoritesSlice";

function Description() {
  let params = useParams();
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [activeTab, setActiveTab] = useState("instructions");
  const [inFavorites, setInFavorites] = useState(
    favorites.some((recipe) => recipe.id === parseInt(params.name))
  );
  const spoonacularApiKey = "b98e0f53b7a14a11962694528960a95f";

  const fetchDescription = async () => {
    const data = await axios(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${spoonacularApiKey}`
    );
    setRecipeDetails(data.data);
  };

  function handleClick() {
    if (!inFavorites) {
      dispatch(addToFavorites(recipeDetails));
    } else {
      dispatch(removeFromFavorites(recipeDetails.id));
    }
    setInFavorites(!inFavorites);
  }

  useEffect(() => {
    fetchDescription();
  }, []);

  return recipeDetails ? (
    <div className="detail-wrapper">
      <div className="img-and-title">
        <h2>{recipeDetails.title}</h2>
        <img src={recipeDetails.image} alt="" />
        <button
          className={inFavorites ? "activeTab" : ""}
          onClick={() => handleClick()}
        >
          <img src={heart} alt="" />
        </button>
      </div>
      <div className="info">
        <button
          className={activeTab === "instructions" ? "activeTab" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </button>
        <button
          className={activeTab === "ingredients" ? "activeTab" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </button>
        {activeTab === "instructions" ? (
          <div>
            <h3
              dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}
            ></h3>
            <h3
              dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }}
            ></h3>
          </div>
        ) : (
          <ul>
            {recipeDetails.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
}

export default Description;
