import "./index.css";
import chefLogo from "../../pngs/chef.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ThereIsNotSearchRequest } from "../../redux/features/searchRequest/searchRequestSlice";

function Navbar() {
  const dispatch = useDispatch();

  return (
    <div className="nav">
      <Link onClick={() => dispatch(ThereIsNotSearchRequest())} to={"/"}>
        <img src={chefLogo} alt="" />
        <h2>Yummy Recipe</h2>
      </Link>
      <Link to={"/favorites"}>
        <h3>Favorites</h3>
      </Link>
    </div>
  );
}

export default Navbar;
