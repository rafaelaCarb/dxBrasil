import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produto/:id" element={<ProductPage />} />
      </Routes>
  );
}

export default App;
