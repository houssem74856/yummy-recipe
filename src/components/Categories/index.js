import "./index.css";
import African from "../../pngs/African.png";
import Chinese from "../../pngs/Chinese.png";
import Italian from "../../pngs/pizza.png";
import Mediterranean from "../../pngs/olive-oil.png";
import GlutenFree from "../../pngs/gluten-free.png";
import Vegetarian from "../../pngs/salad.png";
import Vegan from "../../pngs/eco-friendly-fabric.png";
import Whole30 from "../../pngs/apple.png";
import Category from "../Category";

function Categories() {
  const cuisineCategoryInfos = [
    { title: "African", src: African },
    { title: "Chinese", src: Chinese },
    { title: "Italian", src: Italian },
    { title: "Mediterranean", src: Mediterranean },
  ];
  const dietCategoryInfos = [
    { title: "Gluten Free", src: GlutenFree },
    { title: "Vegetarian", src: Vegetarian },
    { title: "Vegan", src: Vegan },
    { title: "Whole30", src: Whole30 },
  ];

  return (
    <div className="categories">
      <Category
        categoryName="Cuisine"
        categoryInfos={cuisineCategoryInfos}
      ></Category>
      <Category
        categoryName="Diet"
        categoryInfos={dietCategoryInfos}
      ></Category>
    </div>
  );
}

export default Categories;
