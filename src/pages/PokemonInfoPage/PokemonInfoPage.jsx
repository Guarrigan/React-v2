import { useParams, Link } from 'react-router-dom';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Navbar from '../../components/Navbar/Navbar';
import './PokemonInfoPage.css'

const PokemonInfoPage = () => {
    // Cogemos el id de la url, fijado en App.jsx
  const { id } = useParams();
  const pokeID = parseInt(id)


  const previousPokemonId = pokeID > 1 ? pokeID - 1 : null;
  const nextPokemonId = pokeID < 151 ? pokeID + 1 : null;

  return (
    <>
      <Navbar/>
        
      <div className='container-info'>
      {previousPokemonId && (
    <Link to={`/pokemon/${previousPokemonId}`}>
    <img className='left' src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDJpbjFvN3NqNTl4MnVwd3k3NGcyb2tua2hiOTQyd2x5anJ5cWM0NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/nMy8HTFQRWpudNwbxQ/giphy.gif'/>
    </Link>
  )}
  {/* Cargar el componente PokemonCard con el ID proporcionado */}
  <PokemonCard id={id} />
  {/* Botón para ir al Pokémon siguiente */}
  {nextPokemonId && (
    <Link to={`/pokemon/${nextPokemonId}`}>
      <img className='right' src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDJpbjFvN3NqNTl4MnVwd3k3NGcyb2tua2hiOTQyd2x5anJ5cWM0NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/nMy8HTFQRWpudNwbxQ/giphy.gif'/>
    </Link>
    
  )}
  </div>
    </>
  );
}

export default PokemonInfoPage;
