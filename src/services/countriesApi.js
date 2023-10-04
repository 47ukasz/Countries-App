const BASE_URL = "http://localhost:3000/countries";

export async function fetchAllCountries() {
  const res = await fetch(BASE_URL);
  const data = await res.json();

  return data;
}

export async function fetchCountryByCountryCode(code) {
  const res = await fetch(`${BASE_URL}/${code}`);
  const data = await res.json();

  return data;
}

export async function fetchCountriesByRegion(region) {
  let correctRegion =
    region.charAt(0).toUpperCase() + region.slice(1).toLowerCase();

  if (correctRegion === "America") correctRegion += "s";

  const res = await fetch(`${BASE_URL}/region/${correctRegion}`);
  const data = await res.json();

  return data;
}
