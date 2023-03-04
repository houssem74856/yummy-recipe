import "./index.css"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Favorites() {
  const favorites = useSelector((state) => state.favorites.favorites)
  
  return (
    <div className="favorites">
      <h3>Favorites</h3>
      <div>
        {favorites &&
          favorites.map((recipe) => {
            return (
              <Link to={"/description/" + recipe.id} key={recipe.id}>
                <div className="favorites-card">
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <div className="gradient"></div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  )
}

export default Favorites