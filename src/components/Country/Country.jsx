import React, { useState } from "react";
import "./country.css";

export const Country = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // if (visited) {
    //   setVisited(false)
    // } else {
    //   setVisited(true)
    // }
    // setVisited(visited ? false : true)

    setVisited(!visited);
    handleVisitedCountry(country);
  };
  const countryImg = country.flags.flags.png;
  const population = country.population.population;
  const countryName = country.name.common;

  return (
    <div className={`${visited ? "visited-country" : "country"}`}>
      <h2>{countryName}</h2>
      <img src={countryImg} alt="flag" />
      <p>Population: {population}</p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>

      <button onClick={ () => handleVisitedFlag(country.flags.flags.png)}>visited flag</button>
    </div>
  );
};
