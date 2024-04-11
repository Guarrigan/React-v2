import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './PokemonList.css'

// Comentar


const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
                setPokemonList(response.data.results)
            } catch (error) {
                console.error('Error ', error)
            }
        };
        fetchPokemon();
    }, [])

    // Funcion para capitalizar una cadena de texto (La usamos para el nombre en este momento.)
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };


    return (
        <div className="container">
            <div className="container-title">
                <h1 className="title">Pokédex 1st gen</h1>
            </div>

            <div className="pokemon-grid">
                {pokemonList.map((pokemon, index) => (
                    <Link key={index} to={`/pokemon/${index + 1}`} style={{ textDecoration: 'none' }}>
                        <div className="pokemon-item" key={index}>
                            {/* Cogemos el index del pokemonList y se lo pasamos al routing */}
                            {capitalizeFirstLetter(pokemon.name)}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PokemonList