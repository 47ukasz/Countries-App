import { useLoaderData, useNavigate } from "react-router-dom";
import { fetchCountryByCountryCode } from "../../services/countriesApi";
import Button from "../../ui/Button";
import CountryItem from "./CountryItem";

const countries = require("i18n-iso-countries");

export default function Country() {
  const navigate = useNavigate();
  const country = useLoaderData();

  const {
    name,
    population,
    flag,
    region,
    capital,
    subregion,
    nativeName,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country?.at(0);

  const languagesToString = languages.map((el) => el.name).join(", ");
  const currenciesToString = currencies?.map((el) => el.name).join(", ");

  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

  const bordersAlpha2 = borders
    ?.map((el) => (el === "UNK" ? "XK" : countries.alpha3ToAlpha2(el)))
    .filter((el) => el !== null);

  const countryBorders = bordersAlpha2?.map((el) => ({
    countryCode: el,
    countryName: regionNames.of(el),
  }));

  function handleNavigateBack() {
    navigate(-1);
  }

  function handleNavigateCountry(countryCode) {
    navigate(`/countries/${countryCode}`);
  }

  return (
    <div className="px-4 py-4">
      <Button onClick={handleNavigateBack} type="back">
        <>
          <i className="fa-solid fa-arrow-left"></i>
          <span>Back</span>
        </>
      </Button>
      <div className="mt-14 lg:mt-20 xl:mt-32 xl:flex xl:gap-x-28">
        <img
          className="mb-14 max-h-[300px] w-full max-w-[650px] object-cover xl:mb-0 xl:max-h-[450px] xl:max-w-[50%]"
          src={flag}
          alt={`${name} flag`}
        />
        <div className="xl:p-8">
          <h2 className="mb-8 text-2xl font-bold tracking-wide">{name}</h2>
          <div className="xl:flex xl:justify-between xl:gap-x-20">
            <div className="mb-8 space-y-2 sm:mb-0">
              <CountryItem description="Native name" content={nativeName} />
              <CountryItem
                description="Population"
                content={population.toLocaleString("en-US", {
                  useGrouping: true,
                })}
              />
              <CountryItem description="Region" content={region} />
              <CountryItem description="Sub Region" content={subregion} />
              {capital && (
                <CountryItem description="Capital" content={capital} />
              )}
            </div>
            <div className="mt-14 space-y-2 xl:mt-0">
              <CountryItem
                description="Top Level Domain"
                content={topLevelDomain.at(0)}
              />
              {currencies && (
                <CountryItem
                  description="Currencies"
                  content={currenciesToString}
                />
              )}
              {languages && (
                <CountryItem
                  description="Languages"
                  content={languagesToString}
                />
              )}
            </div>
          </div>

          {borders && (
            <div className="mt-8">
              <p className="text-lg font-semibold text-stone-950 dark:text-white">
                Border Countries:
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                {countryBorders?.map((el, index) => (
                  <Button
                    onClick={() => handleNavigateCountry(el.countryCode)}
                    type="country"
                    key={index}
                  >
                    {el.countryName}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const code = params.country;

  const data = await fetchCountryByCountryCode(code);

  return data;
}
