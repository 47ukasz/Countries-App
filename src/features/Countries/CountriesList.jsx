import { useLoaderData } from "react-router-dom";
import {
  fetchAllCountries,
  fetchCountriesByRegion,
} from "../../services/countriesApi";
import CountriesItem from "./CountriesItem";
import { useSearch } from "../Search/SearchContext";
import { useFilters } from "../Filter/FilterContext";
import { useEffect, useState } from "react";

export default function CountriesList() {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const loaderCountries = useLoaderData();
  const { query } = useSearch();
  const { filter } = useFilters();

  const countriesList =
    filteredCountries.length === 0 ? loaderCountries : filteredCountries;

  const searchedCountries = countriesList.filter((el) =>
    el.name.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCountriesByRegion(filter);
      setFilteredCountries(data);
    }

    fetchData();
  }, [filter]);

  return (
    <ul className="mt-5 grid auto-rows-[400px] grid-cols-[1fr] items-center gap-y-16 px-4 sm:mt-10 sm:grid-cols-[repeat(2,_1fr)] sm:gap-x-8 sm:px-0 lg:mt-16 lg:grid-cols-[repeat(3,_1fr)] lg:gap-x-12 2xl:grid-cols-[repeat(4,_1fr)] 2xl:gap-x-16">
      {searchedCountries.map((country) => (
        <CountriesItem data={country} key={country.name} />
      ))}
    </ul>
  );
}

export async function loader() {
  const data = await fetchAllCountries();

  return data;
}
