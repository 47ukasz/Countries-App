import { createContext, useContext, useReducer } from "react";

const FilterContext = createContext();

const initialState = {
  filter: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "filter/update":
      return { ...state, filter: action.payload };
    default:
      throw new Error("Unknown action type!");
  }
}

export default function FilterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FilterContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  const value = useContext(FilterContext);

  if (value === undefined)
    throw new Error("Hook was used outside of the Provider!");

  return value;
}
