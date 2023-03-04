import Categories from "../components/Categories";
import Popular from "../components/Popular";
import Search from "../components/Search";
import Results from "../components/Results";
import { useSelector } from "react-redux";

function Home() {
  const searchRequest = useSelector((state) => state.searchRequest.value);

  return (
    <div>
      <Search />
      <Categories />
      {searchRequest ? <Results /> : <Popular />}
    </div>
  );
}

export default Home;
