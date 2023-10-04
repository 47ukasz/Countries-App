function CountryItem({ description, content }) {
  return (
    <p className="space-x-2">
      <span className="text-lg font-semibold text-stone-950 dark:text-white">
        {description}:
      </span>
      <span className="italic text-stone-500 dark:text-stone-300">
        {content}
      </span>
    </p>
  );
}

export default CountryItem;
