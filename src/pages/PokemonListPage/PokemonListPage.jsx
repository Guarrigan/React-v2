import "./PokemonListPage.css"
import Navbar from "../../components/Navbar/Navbar";
import PokemonList from "../../components/PokemonList/PokemonList";

const PokemonListPage = () => {
  return (
    <>
    <div className="list-background">
    <Navbar></Navbar>
    <PokemonList></PokemonList>

    </div>
    </>
  );
}

export default PokemonListPage;
