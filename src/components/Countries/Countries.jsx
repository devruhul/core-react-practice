import React, { use, useState } from "react";
import { Country } from "../Country/Country";
import "./Countries.css";

export const Countries = ({ fetchCountriesPromise }) => {
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);

  const handleVisitedCountry = (country) => {
    const newVisitedCountries = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountries);
    console.log(visitedCountry);
  };

  const handleVisitedFlag = (flag) => {
    const newVisitedFlag = [...visitedFlag, flag];
    setVisitedFlag(newVisitedFlag);
    console.log("handle ivited flag", visitedFlag);
  };

  const counriesData = use(fetchCountriesPromise);
  const countries = counriesData.countries;
  return (
    <>
      <h2>Countries List ({countries.length})</h2>
      <h2>Total visited country: {visitedCountry.length}</h2>
      <h2>Total visited flag{visitedFlag.length}</h2>

      {visitedCountry.map((countryInfo, index) => (
        <ol key={index}>{countryInfo.name.common}</ol>
      ))}

      {visitedFlag.map((flag, index) => (
        <img key={index} className="flag-image" src={flag} />
      ))}
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </>
  );
};
