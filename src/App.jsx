import { useState, useEffect } from "react";
import WeatherCard from "./components/weatherCard";
import WeatherSearch from "./components/WeatherSearch";
import cityList from "./data/cityList.json";

function App() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("London,UK");
  const [inputValue, setInputValue] = useState("");
  const [matches, setMatches] = useState([]);

  async function fetchAPIData() {
    const WEATHER_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const url =
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
      `${location}?key=${WEATHER_KEY}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("DATA\n", data);
      setData(data);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    fetchAPIData();
  }, [location]);

  function checkDatabase(value) {
    const filteredCities = cityList.filter(
      (city) =>
        city.name.toLowerCase().startsWith(value.toLowerCase()) &&
        city.country === "US"
    );

    setMatches(filteredCities);
    // console.log(matches.map((city) => <li key={city.id}>{city.name}</li>));
    // return matches.map((city) => <li key={city.id}>{city.name}</li>);
    console.log(filteredCities);
    return filteredCities;
  }

  return (
    <>
      <WeatherSearch
        inputValue={inputValue}
        setInputValue={setInputValue}
        location={location}
        setLocation={setLocation}
        matches={matches}
        setMatches={setMatches}
        checkDatabase={checkDatabase}
      />
      <WeatherCard data={data} />
    </>
  );
}

export default App;
