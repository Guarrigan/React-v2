
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Cover from './pages/Cover/Cover';
import Home from './pages/Home/Home';
import PokemonListPage from './pages/PokemonListPage/PokemonListPage';
import PokemonInfoPage from './pages/PokemonInfoPage/PokemonInfoPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Indicamos las rutas que tiene nuestra página y su redireccion. */}
        <Route path="/" element={<Cover />} />
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<PokemonListPage />} />
        <Route path="/pokemon/:id" element={<PokemonInfoPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
