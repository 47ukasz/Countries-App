function FilterItem({ value, onSetValue, selectedValue }) {
  const isSelected = selectedValue === value;

  return (
    <li>
      <button
        onClick={() => onSetValue(value)}
        className={`w-full px-6 py-3 text-left capitalize ring-stone-300 transition-colors duration-300 hover:bg-stone-100 focus:outline-none focus:ring-2 dark:hover:bg-[#35495a] ${
          isSelected &&
          "bg-stone-200 hover:bg-stone-200 dark:bg-[#35495a] dark:hover:bg-[#35495a]"
        }`}
      >
        {value}
      </button>
    </li>
  );
}

export default FilterItem;
