import { atom } from "jotai";

/**
 * Atoms Difinition
 */

// Basic Atom
export const pokemonIdAtom = atom(1);

// Writable Only Atom
export const randompokemonIdAtom = atom(null, (_, set, max: number) =>
  set(pokemonIdAtom, Math.round(Math.random() * max)),
);

// Derived Atom
//export const parityAtom = atom((get) => get(countAtom) ** 2);

// Async Action Atom
// const asyncRandomAtom = atom(
//   (get) => get(countAtom),
//   async (_, set, max: number) => {
//     const randomNum = Math.round(Math.random() * max);
//     await new Promise((resolve) => setTimeout(resolve, 2000));
//     set(countAtom, randomNum);
//   },
// );
