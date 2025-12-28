import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/favorites" element={<div>Favorites Page</div>} />
        <Route path="/search" element={<div>Search Page</div>} />
        {/* Altre route da aggiungere in seguito */}
      </Routes>
    </>
  );
}

export default App;
