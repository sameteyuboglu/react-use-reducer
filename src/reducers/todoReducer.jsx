/* eslint-disable no-case-declarations */
export const initialState = {
  todos: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { todos: [...state.todos, action.payload] };
    case "DELETE":
      const filtered = state.todos.filter((x) => x.id !== action.payload);
      return { todos: filtered };
    case "CLEAR":
      return { ...initialState };
    default:
      return state;
  }
};
