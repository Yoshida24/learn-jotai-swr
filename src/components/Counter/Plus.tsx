import { useAtom } from "jotai";
import { countAtom } from "./atoms";

function Plus() {
  const [, setCount] = useAtom(countAtom);

  return <button onClick={() => setCount((count) => count + 1)}>+</button>;
}

export default Plus;
