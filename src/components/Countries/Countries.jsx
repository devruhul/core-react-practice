import React, { use } from "react";
import { Country } from "../Country/Country";

export const Countries = ({ fetchCountriesPromise }) => {
  console.log(fetchCountriesPromise);
  const counriesData = use(fetchCountriesPromise);
  const countries = counriesData.countries;
  console.log(countries);
  return (
    <>
      <h2>Countries List ({countries.length})</h2>
     {
        countries.map((country) => <Country key={country.cca3} country={country}></Country>)
     }
    </>
  );
};
