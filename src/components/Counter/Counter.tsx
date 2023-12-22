import "./style.css";
import { atom, useAtom } from "jotai";

const countAtom = atom(0);

// Derived Atom (参照)
const doubledCountAtom = atom((get) => get(countAtom) * 2);

// Writable Only Atom (更新)
const randomCountAtom = atom(null, (_, set, min: number, max: number) =>
  set(countAtom, Math.floor(Math.random() * (max - min) + min)),
);

function Minus() {
  const [, setCount] = useAtom(countAtom);
  return <button onClick={() => setCount((count) => count - 1)}>-</button>;
}

function Plus() {
  const [, setCount] = useAtom(countAtom);
  return <button onClick={() => setCount((count) => count + 1)}>+</button>;
}

function Random() {
  const [, setRandomCount] = useAtom(randomCountAtom);
  const min = 0;
  const max = 10;
  return <button onClick={() => setRandomCount(min, max)}>Random</button>;
}

function Count() {
  const [count] = useAtom(countAtom);
  const [doubledCount] = useAtom(doubledCountAtom);
  return (
    <>
      <p>count is {count}</p>
      <p>doubled count is {doubledCount}</p>
    </>
  );
}

function Counter() {
  return (
    <div>
      <Count />
      <Minus />
      <Plus />
      <Random />
    </div>
  );
}

export default Counter;
