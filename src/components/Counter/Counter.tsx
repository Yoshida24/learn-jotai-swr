import "./style.css";
import { atom, useAtom } from "jotai";

const countAtom = atom(0);
const doubledCountAtom = atom((get) => get(countAtom) * 2);

function Minus() {
  const [, setCount] = useAtom(countAtom);
  return <button onClick={() => setCount((count) => count - 1)}>-</button>;
}

function Plus() {
  const [, setCount] = useAtom(countAtom);
  return <button onClick={() => setCount((count) => count + 1)}>+</button>;
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
    </div>
  );
}

export default Counter;
