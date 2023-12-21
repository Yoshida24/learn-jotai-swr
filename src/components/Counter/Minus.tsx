import { useAtom } from "jotai";
import { countAtom } from "./atoms";

function Minus() {
  const [, setCount] = useAtom(countAtom);

  return <button onClick={() => setCount((count) => count - 1)}>-</button>;
}

export default Minus;
