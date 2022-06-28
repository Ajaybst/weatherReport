import React, { useEffect, useState } from "react";
import background from "./images/weatherback.png";
let Weather = () => {
  let [city, setCity] = useState();
  let [search, setSearch] = useState();
  useEffect(() => {
    let fetchApi = () => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=946a9f29c227244605cc363f0aa6512d`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setCity(data.main);
        });
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="container ">
        <div
          className="container d-flex flex-column justify-content-center align-items-center container_temp"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="row">
            <div className="col-12 box ">
              <div className="inp_data  d-flex justify-content-center mt-3">
                <input
                  placeholder="Enter city"
                  type="search"
                  className="search_field p-2"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>
              {!city ? (
                <p className="text-center text-danger mt-3">No city found!</p>
              ) : (
                <div className="div d-flex flex-column justify-content-center align-items mt-5">
                  <div className="cityInfo">
                    <h2 className="mb-3 info_h_tag text-center">
                      City: {search}
                    </h2>
                    <h3 className="mb-3 info_h_tag text-center">
                      Temp: {city.temp}°C
                    </h3>
                    <h4 className="mb-3 info_h_tag text-center">
                      Humidity: {city.humidity}g.kg-1
                    </h4>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Weather;
