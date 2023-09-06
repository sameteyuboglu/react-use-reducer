import { useReducer, useRef } from "react";
import { initialState, reducer } from "../reducers/todoReducer";

function Todo() {
  const formInput = useRef("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      title: e.target[0].value,
    };
    dispatch({ type: "ADD", payload: newTodo });
    formInput.current.value = "";
  };
  const clear = () => {
    dispatch({ type: "CLEAR", payload: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={formInput} />
        <button type="submit">SEND</button>
        <button type="button" onClick={clear}>
          CLEAR LIST
        </button>
      </form>
      <ul>
        {state.todos &&
          state.todos.map((x) => (
            <li key={x.id}>
              {x.title}
              <button
                type="button"
                onClick={() => dispatch({ type: "DELETE", payload: x.id })}
              >
                DELETE
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Todo;
