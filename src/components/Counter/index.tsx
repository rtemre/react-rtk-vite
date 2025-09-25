import { useSelector, useDispatch } from "react-redux";
// Update the import path if your store file is located elsewhere, for example:
import type { RootState } from "../../redux/store";
import { increment, decrement } from "../../redux/slice/counter/counterSlice";
import { Calculator } from "../../utils/calculator";

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const calc = new Calculator();
  const sum = calc.add(2, 3); // Example usage

  return (
    <>
      <div className="card">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <button onClick={() => dispatch(decrement())}>-</button>
          <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>
            count is {count}
          </span>
          <button onClick={() => dispatch(increment())}>+</button>
        </div>
      </div>
      <div>
        <p>2 + 3 = {sum}</p>
      </div>
    </>
  );
}

export default Counter;
