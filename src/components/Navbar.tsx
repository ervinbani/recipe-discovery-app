import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </nav>
  );
}
