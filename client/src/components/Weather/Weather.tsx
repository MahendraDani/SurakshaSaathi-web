import axios from "axios";
import { useEffect, useState } from "react";

const Weather = () => {
  // const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [feelsLike_c, setFeelsLike_c] = useState(0);
  const [feelsLike_f, setFeelsLike_f] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [iconUrl, setIconUrl] = useState("");
  const [lastUpdatedDate, setLastUpdatedDate] = useState("");
  const [lastUpdatedTime, setLastUpdatedTime] = useState("");
  const [temp_c, setTemp_c] = useState(0);
  // const [temp_f, setTemp_f] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);

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
        setHumidity(response.data.current.humidity);
        let lastUpdated = response.data.current.last_updated.split(" ");
        const date = lastUpdated[0].split("-").reverse().join(".");
        const time = lastUpdated[1];
        setLastUpdatedDate(date);
        setLastUpdatedTime(time);
        setTemp_c(response.data.current.temp_c);
        // setTemp_f(response.data.current.temp_f);
        setIconUrl(`https:${response.data.current.condition.icon}`);
        setWindSpeed(response.data.current.wind_kph);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleWeatherAPI();
  }, []);
  return (
    <div className="my-16 mx-auto min-w-[20rem] max-w-[30rem] border-2 flex flex-col justify-between items-start">
      <div className="w-full bg-[#3848E0] text-white p-4">
        <h2 className="text-2xl font-semibold">Weather Condition</h2>
      </div>
      <div className="w-full bg-[#BED6FF] flex justify-around items-center gap-2 p-4">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex justify-center items-center gap-4">
            <div>
              <img src={iconUrl} alt="icon" className="text-[#0F1B92]" />
            </div>
            <h2 className="text-4xl text-[#0F1B92] font-semibold">
              {temp_c}°C
            </h2>
          </div>
          <h1 className="text-xl text-[#053A95]">Partly Cloudy</h1>
        </div>
        <div className="text-lg text-[#053A95]">
          <h3 className="text-xl font-semibold">
            {name}, {country}
          </h3>
          <h3>Feels Like : {feelsLike_c}°C </h3>
          <h3>Feels Like : {feelsLike_f}°F </h3>
          <h3>Humidity : {humidity}%</h3>
          <h3>Wind : {windSpeed}%</h3>
          <div className="text-sm flex gap-2">
            <h3>Last updated : </h3>
            <h3>{lastUpdatedDate}</h3>
            <h3>{lastUpdatedTime}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
