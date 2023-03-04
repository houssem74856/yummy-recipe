import "./index.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Results() {
  const results = useSelector((state) => state.results.value);

  return (
    <div className="results">
      <h3>Results</h3>
      {results ? (
        <div>
          {results.length > 0 ? (
            results.map((recipe) => {
              return (
                <Link to={"/description/" + recipe.id} key={recipe.id}>
                  <div className="results-card">
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <div className="gradient"></div>
                  </div>
                </Link>
              );
            })
          ) : (
            <h2>No results were found.</h2>
          )}
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default Results;
