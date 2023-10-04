import { useEffect, useRef, useState } from "react";
import FilterItem from "./FilterItem";
import { useFilters } from "./FilterContext";

const contentArr = ["none", "africa", "america", "asia", "europe", "oceania"];

function Filter() {
  const { filter, dispatch } = useFilters();
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function closeHandler(e) {
      if (!ref.current.contains(e.target)) setShow(false);
    }

    document.addEventListener("click", closeHandler);

    return () => {
      document.removeEventListener("click", closeHandler);
    };
  }, []);

  function handleShow() {
    setShow((value) => !value);
  }

  function handleSetValue(value) {
    dispatch({ type: "filter/update", payload: value });
  }

  return (
    <div ref={ref} className="relative z-10 mt-12 max-w-[55%] sm:mt-0 sm:w-52">
      <button
        onClick={handleShow}
        className="flex w-full items-center justify-between rounded-md bg-white px-5 py-4 text-sm shadow-sm ring-stone-300 focus:outline-none focus:ring-2 dark:bg-[#2B3945] sm:text-base"
      >
        <span className="capitalize">
          {filter === "" ? "Filter by region" : filter}
        </span>
        <span>
          {show ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </span>
      </button>
      {show && (
        <ul className="absolute mt-3 w-full bg-white shadow-sm dark:bg-[#2B3945]">
          {contentArr.map((item, index) => (
            <FilterItem
              value={item}
              key={index}
              onSetValue={handleSetValue}
              selectedValue={filter}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Filter;
