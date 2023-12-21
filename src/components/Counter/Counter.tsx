import Count from "./Count";
import Plus from "./Plus";
import Minus from "./Minus";

function Counter() {
  return (
    <div className="container">
      <Count />
      <Minus />
      <Plus />
    </div>
  );
}

export default Counter;
