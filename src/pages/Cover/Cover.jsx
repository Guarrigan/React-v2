
import "./Cover.css";
import { Link } from 'react-router-dom';


const Cover = () => {
  return (
    <div className="cover">
        <Link to="/home">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="Pokémon Logo" />
      </Link>
      <h1>Welcome to the Pokémon World!</h1>
      <p>Explore the vast world of Pokémon, catch em all, and become a Pokémon Master!</p>
    </div>
  );
}

export default Cover;
