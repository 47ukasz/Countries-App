import { createContext, useContext, useReducer } from "react";

const SearchContext = createContext();

const initialState = {
  query: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "query/update":
      return { ...state, query: action.payload };
    default:
      throw new Error("Unknown action type!");
  }
}

export default function SearchProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SearchContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const value = useContext(SearchContext);

  if (value === undefined)
    throw new Error("Hook was used outside of the Provider!");

  return value;
}
