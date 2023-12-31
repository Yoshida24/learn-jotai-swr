import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import jotaiLogo from "/jotai.png";
import "./App.css";
import {
  PokemonId,
  Plus,
  Minus,
  Random,
} from "./components/PokemonId/PokemonId";
import PokeData from "./components/PokeData/PokeData";
import { useAtom } from "jotai";
import { pokemonIdAtom } from "./components/PokemonId/pokemonIdAtom";

function App() {
  const [count] = useAtom(pokemonIdAtom);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://jotai.dev" target="_blank">
          <img src={jotaiLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Jotai</h1>
      <div className="card">
        <Minus />
        <Plus />
        <Random />
        <PokemonId />
        <PokeData pokeId={count} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
