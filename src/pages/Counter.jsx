import { useReducer } from "react";

const initialState = {
  count: 0,
  users: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Decrease":
      return {
        ...state,
        count: state.count - 1,
      };

    case "Increase":
      return {
        ...state,
        count: state.count + 1,
      };
    case "RESET":
      return {
        ...state,
        count: 0,
      };
    default:
      break;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button
        onClick={() => dispatch({ type: "Decrease" })}
        disabled={state.count <= 0 ? true : false}
      >
        Decrease
      </button>
      <span className="count">{state.count}</span>
      <button onClick={() => dispatch({ type: "Increase" })}>Increase</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

export default Counter;
