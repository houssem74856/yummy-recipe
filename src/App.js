import ActualPage from "./pages/ActualPage";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <ActualPage />
    </div>
    </BrowserRouter>
  );
}

export default App;
