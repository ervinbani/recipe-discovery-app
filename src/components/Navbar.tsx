import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search.trim())}`);
      setSearch("");
    }
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <form onSubmit={handleSubmit} className="navbar-search-form">
            <input
              type="text"
              placeholder="Cerca ricetta..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="navbar-search-input"
            />
            <button type="submit" className="navbar-search-btn">
              Cerca
            </button>
          </form>
        </li>
      </ul>
    </nav>
  );
}
