import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import { Link } from "react-router-dom";

function Popular() {
  const popularRecipiesEndPoint =
    "https://api.spoonacular.com/recipes/findByNutrients";
  const spoonacularApiKey = "b98e0f53b7a14a11962694528960a95f";

  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const data = await axios(
        `${popularRecipiesEndPoint}?minCarbs=10&maxCarbs=50&number=10&apiKey=${spoonacularApiKey}`
      );
      localStorage.setItem("popular", JSON.stringify(data.data));
      setPopular(data.data);
    }

    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchPopular();
  }, []);

  return (
    <div className="popular">
      <h3>Popular</h3>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "4rem",
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Link to={"/description/" + recipe.id}>
                  <div className="popular-card">
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <div className="gradient"></div>
                  </div>
                </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      )}
    </div>
  );
}

export default Popular;
