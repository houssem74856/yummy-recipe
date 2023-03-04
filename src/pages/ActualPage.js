import Favorites from "./Favorites";
import Home from "./Home";
import Description from "./Description";
import { Route, Routes } from "react-router-dom";

function ActualPage() {
  return (
    <div className="actual-page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/description/:name" element={<Description />} />
      </Routes>
    </div>
  );
}

export default ActualPage;
