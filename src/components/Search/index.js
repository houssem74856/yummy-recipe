import "./index.css";
import searchLogo from "../../pngs/research.png";
import { useDispatch, useSelector } from "react-redux";
import { ThereIsSearchRequest } from "../../redux/features/searchRequest/searchRequestSlice";
import { setResults } from "../../redux/features/results/resultsSlice";
import { useState } from "react";
import axios from "axios";

function Search() {
  const { cuisine, diet } = useSelector((state) => state.cuisineAndDiet.value);
  const dispatch = useDispatch();
  const [searchedRecipe, setSearchedRecipe] = useState("");
  const popularRecipiesApiKey = "b98e0f53b7a14a11962694528960a95f";
  const searchRecipiesEndPoint =
    "https://api.spoonacular.com/recipes/complexSearch";

  const fetchRecipies = async () => {
    const data = await axios(
      `${searchRecipiesEndPoint}?cuisine=${cuisine}&diet=${diet}&query=${searchedRecipe}&apiKey=${popularRecipiesApiKey}&number=10`
    );
    dispatch(setResults(data.data.results));
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(ThereIsSearchRequest());
    dispatch(setResults());
    setSearchedRecipe("");
    fetchRecipies();
  }

  return (
    <form className="search-bar" onSubmit={(e) => handleSubmit(e)}>
      <img src={searchLogo} alt="" />
      <input
        type="text"
        value={searchedRecipe}
        onChange={(e) => setSearchedRecipe(e.target.value)}
      />
    </form>
  );
}

export default Search;
