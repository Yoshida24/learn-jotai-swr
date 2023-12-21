import "./style.css";
import { atom, useAtom } from "jotai";

const countAtom = atom(0);

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
  return (
    <>
      <p>count is {count}</p>
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
