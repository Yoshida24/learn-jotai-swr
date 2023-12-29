import "./style.css";
import { pokemonIdAtom, randompokemonIdAtom } from "./pokemonIdAtom";
import { useAtom } from "jotai";

/**
 * Components Difinition
 */

export function Minus() {
  const [, setCount] = useAtom(pokemonIdAtom);
  return <button onClick={() => setCount((count) => count - 1)}>Prev</button>;
}

export function Plus() {
  const [, setCount] = useAtom(pokemonIdAtom);
  return <button onClick={() => setCount((count) => count + 1)}>Next</button>;
}

export function Random() {
  const [, setRandomCount] = useAtom(randompokemonIdAtom);
  const max = 1000;
  return <button onClick={() => setRandomCount(max)}>Random</button>;
}

export function PokemonId() {
  const [count] = useAtom(pokemonIdAtom);
  return (
    <>
      <h3>No. {count}</h3>
    </>
  );
}
