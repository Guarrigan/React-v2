// TODO pokemon card con datos, cuando clicamos en un nombre apareceran los datos de ese pokemon especifico.
import axios from 'axios';
import './PokemonCard.scss'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const PokemonCard = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

  useEffect(() => {
      const fetchPokemon = async () => {
          try {
              const response = await axios.get(url);
              setPokemon(response.data)
              // const datos = response.data.results
              // console.log(datos)
          } catch (error) {
              console.error('Error ', error)
          }
      };
      fetchPokemon();
  }, [id,url])

  // Lógica para obtener los datos del Pokémon con el ID proporcionado

  return (
   <div id="cards">
      {pokemon && (
        <figure className={`card card--${pokemon.types[0].type.name}`}>
          <div className="card__image-container">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="card__image" />
          </div>
          <figcaption className="card__caption">
            <h1 className="card__name">{pokemon.species.name}</h1>
            <h3 className="card__type">{pokemon.types[0].type.name}</h3>
            <table className="card__stats">
              <tbody>
                <tr>
                  <th>HP</th>
                  <td>{pokemon.stats[0].base_stat}</td>
                </tr>
                <tr>
                  <th>Attack</th>
                  <td>{pokemon.stats[1].base_stat}</td>
                </tr>
                <tr>
                  <th>Defense</th>
                  <td>{pokemon.stats[2].base_stat}</td>
                </tr>
                <tr>
                  <th>Special Attack</th>
                  <td>{pokemon.stats[3].base_stat}</td>
                </tr>
                <tr>
                  <th>Special Defense</th>
                  <td>{pokemon.stats[4].base_stat}</td>
                </tr>
                <tr>
                  <th>Speed</th>
                  <td>{pokemon.stats[5].base_stat}</td>
                </tr>
              </tbody>
            </table>
            <div className="card__abilities">
              <h4 className="card__ability">
                <span className="card__label">Ability</span>
                {pokemon.abilities[0].ability.name}
              </h4>
              {pokemon.abilities[1] && (
                <h4 className="card__ability">
                  <span className="card__label">Hidden Ability</span>
                  {pokemon.abilities[1].ability.name}
                </h4>
              )}
            </div>
          </figcaption>
        </figure>
      )}
    </div>
  );
};

export default PokemonCard;