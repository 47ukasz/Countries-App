import { useNavigate } from "react-router-dom";

function CountriesItem({
  data: { name, capital, flag, population, region, alpha2Code },
}) {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/countries/${alpha2Code}`);
  }

  return (
    <li
      onClick={handleNavigate}
      className="h-full cursor-pointer overflow-hidden rounded-md"
    >
      <img
        className="h-1/2 w-full object-cover"
        src={flag}
        alt={`${name} flag`}
      />

      <div role="button" className="h-1/2 bg-white px-4 py-4 dark:bg-[#2B3945]">
        <p className="my-3 text-xl font-bold">{name}</p>
        <p className="mb-2 space-x-1 font-semibold">
          <span>Population:</span>
          <span className="font-normal italic">
            {population.toLocaleString("en-US", { useGrouping: true })}
          </span>
        </p>
        <p className="mb-2 space-x-1 font-semibold">
          <span>Region:</span>
          <span className="font-normal italic">{region}</span>
        </p>
        <p className="mb-2 space-x-1 font-semibold">
          <span>Capital:</span>
          <span className="font-normal italic">{capital}</span>
        </p>
      </div>
    </li>
  );
}

export default CountriesItem;
