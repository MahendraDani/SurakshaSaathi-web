import axios from "axios";
import React, { useState } from "react";

const Weather = () => {
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [feelsLike_c, setFeelsLike_c] = useState(0);
  const [feelsLike_f, setFeelsLike_f] = useState(0);
  const [humidty, setHumdity] = useState(0);
  const [lastUpdated, setLastUpdated] = useState("");
  const [lastUpdatedDate, setLastUpdatedDate] = useState("");
  const [lastUpdatedTime, setLastUpdatedTime] = useState("");
  const [temp_c, setTemp_c] = useState(0);
  const [temp_f, setTemp_f] = useState(0);

  const handleWeatherAPI = async () => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=04779bb0414b4c1385c54732232409&q=Bhopal&aqi=no`
      );
      if (response) {
        console.log(response);
        setCountry(response.data.location.country);
        setName(response.data.location.name);
        setFeelsLike_c(response.data.current.feelslike_c);
        setFeelsLike_f(response.data.current.feelslike_f);
        setHumdity(response.data.current.humdity);
        let lastUpdated = response.data.current.last_updated.split(" ");
        const date = lastUpdated[0].split("-").reverse().join(".");
        const time = lastUpdated[1];
        setLastUpdatedDate(date);
        setLastUpdatedTime(time);
        setTemp_c(response.data.current.temp_c);
        setTemp_f(response.data.current.temp_f);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <label> City</label>
        <input type="text" className="border-2" />
      </div>
      <button onClick={handleWeatherAPI}>Check Weather</button>
      <div>
        {name},{country},{feelsLike_c},{feelsLike_f},{humidty},{lastUpdatedDate}
        ,{lastUpdatedTime},{temp_c},{temp_f}
      </div>
      <div>Time : {lastUpdatedTime}</div>
      <div>Date : {lastUpdatedDate}</div>
    </div>
  );
};

export default Weather;
