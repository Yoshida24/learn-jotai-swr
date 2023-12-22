import "./style.css";
import { atom, useAtom } from "jotai";

const countAtom = atom(0);

// Derived Atom
const parityAtom = atom((get) => get(countAtom) ** 2);

// Writable Only Atom
const randomCountAtom = atom(null, (_, set, max: number) =>
  set(countAtom, Math.round(Math.random() * max)),
);

// Async Action Atom
const asyncRandomAtom = atom(
  (get) => get(countAtom),
  async (_, set, max: number) => {
    const randomNum = Math.round(Math.random() * max);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    set(countAtom, randomNum);
  },
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
  const max = 10;
  return <button onClick={() => setRandomCount(max)}>Random</button>;
}

function DelayRandom() {
  const [, setAsyncRandomCount] = useAtom(asyncRandomAtom);
  const max = 10;
  return (
    <button onClick={() => setAsyncRandomCount(max)}>
      Random (2000ms delay)
    </button>
  );
}

function Count() {
  const [count] = useAtom(countAtom);
  const [doubledCount] = useAtom(parityAtom);
  return (
    <>
      <p>count is {count}</p>
      <p>square is {doubledCount}</p>
    </>
  );
}

function Counter() {
  return (
    <div>
      <div>
        <Count />
        <Minus />
        <Plus />
        <Random />
        <DelayRandom />
      </div>
    </div>
  );
}

export default Counter;
