import Filter from "../Filter/Filter";
import Searchbar from "../Search/Searchbar";

function CountriesFilters() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <Searchbar />
      <Filter />
    </div>
  );
}

export default CountriesFilters;
