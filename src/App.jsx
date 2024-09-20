import { useState, useEffect } from "react";
import WeatherCard from "./components/weatherCard";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchAPIData() {
      const WEATHER_KEY = import.meta.env.VITE_WEATHER_API_KEY;
      const url =
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=" +
        `${WEATHER_KEY}`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log("DATA\n", data);
        setData(data);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchAPIData();
  }, []);

  return (
    <>
      <WeatherCard data={data} />
    </>
  );
}

export default App;
