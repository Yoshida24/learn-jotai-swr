import { useAtom } from "jotai";
import { countAtom } from "./atoms";

function Count() {
  const [count] = useAtom(countAtom);

  return <p>count is {count}</p>;
}

export default Count;
