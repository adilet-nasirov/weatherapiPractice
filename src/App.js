// import axios from "axios";
import { useState, useEffect } from "react";
import "./app.css";
const api = {
  key: "69dfae742d38c6fd4cdf34760b0e3b91",
  base: "https://api.openweathermap.org/data/2.5/",
};
function App() {
  const cities = [
    "Select a city",
    "Seattle",
    "Bishkek",
    "California",
    "Sonsonate",
  ];
  // im giving you one useState that is with the start value of the cities index[1]
  const [selectedCity, setSelectedCity] = useState(cities[1]);
  // maybe after calling the API in use effect you will need to save the information in another useState
  // like weather
  const [selectedData, setSelectedData] = useState([]);

  const fetchData = async () => {
    const responce = await fetch(
      `${api.base}weather?q=${selectedCity}&units=metric&APPID=${api.key}`
    );
    const data = await responce.json();
    setSelectedData(data);
  };
  useEffect(() => {
    fetchData();
  }, [selectedCity]);
  const onChange = (e) => {
    setSelectedCity(e.target.value);
  };
  return (
    <div className="container warm">
      <div className=" app warm">
        <main>
          <div className="top">
            <div className="location">{selectedCity}</div>
            <div>
              <div className="temp">
                <h2>{selectedData.main.temp} &deg;C</h2>
              </div>
              <div>
                <div className="situation">
                  <h3>{selectedData.weather[0].main}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="select-area">
            <select className="custom-select" value="value" onChange={onChange}>
              {
                /* we need to map our cities in order to show the options */
                cities.map((city, index) => {
                  return <option key={`abc${index}`}>{city}</option>;
                })
              }
            </select>
            <br />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
