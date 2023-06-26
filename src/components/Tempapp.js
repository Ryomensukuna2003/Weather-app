import React, { useEffect, useState } from "react";
import "./css/style.css";

function Tempapp() {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("Lucknow");

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    const fetchApi = async () => {
      const capitalizedSearch = capitalizeFirstLetter(search);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${capitalizedSearch}&units=metric&appid=3be36b54a88ecafa1c4783eb35793413`;
      const response = await fetch(url);
      const resjson = await response.json();
      setCity(resjson.main);
      console.log(resjson);
      console.log(capitalizedSearch);
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <div className="main_box">
        <div className="input-data">
          <input
            type="text"
            className="inputfield"
            onChange={(event) => {
              setSearch(capitalizeFirstLetter(event.target.value));
            }}
          />
        </div>
        
        {!city ? (
          <p className="invalid">Invalid City Name</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">{search}</h2>
              <h1 className="temp">Temp: {city.temp}</h1>
              <div className="min-max">
                <p className="mintemp">Min: {city.temp_min}</p>
                <p className="maxtemp">Max: {city.temp_max}</p>
                <p className="Humidity">Humidity: {city.humidity}</p>
              </div>
            </div>

            <div className="wave-one"></div>
            <div className="wave-two"></div>
            <div className="wave-three"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default Tempapp;
