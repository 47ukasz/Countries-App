import { useState } from "react";
import { useSearch } from "./SearchContext";
import { useNavigate } from "react-router-dom";

function Searchbar() {
  const navigate = useNavigate();
  const { dispatch, query } = useSearch();

  function handleOnChange(value) {
    dispatch({ type: "query/update", payload: value });
  }

  return (
    <div className="flex items-center rounded-md shadow-sm">
      <label
        htmlFor="search"
        className="cursor-pointer rounded-l-md bg-white px-4 py-4 text-sm dark:bg-[#2B3945] dark:text-white sm:text-base"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </label>
      <input
        value={query}
        onChange={(e) => handleOnChange(e.target.value)}
        name="search"
        id="search"
        className="grow rounded-r-md px-3 py-4 text-sm outline-none ring-stone-300 transition-[width] focus:ring-2 dark:bg-[#2B3945] dark:placeholder:text-white sm:text-base md:w-60 md:focus:w-64 lg:w-[500px] lg:focus:w-[520px]"
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default Searchbar;
