import React from "react";

export const Country = ({ country }) => {
  const countryImg = country.flags.flags.png;
  const population = country.population.population;
  const countryName = country.name.common;
  console.log(country.currencies.currencies);
  const languages = Object.values(country.languages.languages).join(", ");
  const currency = Object.keys(country.currencies.currencies).join(", ");
  const currencySymbol = Object.values(country.currencies.currencies)
    .map((currency) => currency.symbol)
    .join(", ");

  return (
    <>
      <h2>{countryName}</h2>
      <img src={countryImg} alt="flag" />
      <p>Population: {population}</p>
      <p>Languages: {languages}</p>
      <p>Currency: {currency}</p>
      <p>Currency Symbol: {currencySymbol}</p>
    </>
  );
};
