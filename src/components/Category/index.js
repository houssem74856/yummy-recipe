import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setCuisine,
  setDiet,
} from "../../redux/features/cuisineAndDiet/cuisineAndDietSlice";

function Category({ categoryName, categoryInfos }) {
  const { cuisine, diet } = useSelector((state) => state.cuisineAndDiet.value);
  const dispatch = useDispatch();

  function activate(title) {
    if (categoryName === "Cuisine") {
      if (cuisine !== title) dispatch(setCuisine(title));
      else dispatch(setCuisine(null));
    } else {
      if (diet !== title) dispatch(setDiet(title));
      else dispatch(setDiet(null));
    }
  }

  return (
    <div className="category">
      {categoryInfos.map((card) => {
        return (
          <div key={categoryInfos.indexOf(card)}>
            <img
              onClick={() => activate(card.title)}
              className={
                cuisine === card.title || diet === card.title
                  ? "activeCategory"
                  : null
              }
              src={card.src}
              alt=""
            />
            <h4>{card.title}</h4>
          </div>
        );
      })}
      <h3>{categoryName}</h3>
    </div>
  );
}

export default Category;
