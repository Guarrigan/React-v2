import { Link } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
    return (
        <header>
      <nav className='navbar'>
        <ul>
          <li><Link to="/">Cover</Link></li>
          <li><Link to="/list">Pokédex</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      </header>
    );
  }
  
  export default Navbar;