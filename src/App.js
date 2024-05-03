import {  useState } from 'react';
import './App.css';
import City from './component/City/City';
import Search from './component/Search/Search';
import { convertToFlag } from './utils';
import Weather from './component/Weather/Weather';
import { RotatingLines } from 'react-loader-spinner';


function App() {
  
  const [weatherData, setWeatherData] = useState({
    weather: null,
    displayLocation: null,
    location: null,
    loading: false,
  });
  function searchlocation(value) {
    setWeatherData({...weatherData, location:value})
  }
  async function fetchWeather() {
    try {
      setWeatherData((prevState) => ({ ...prevState, loading: true }));
  
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${weatherData.location}`
      );
      const geoData = await geoRes.json();
  
      if (!geoData.results) throw new Error("Location not found");
  
      const { latitude, longitude, timezone, name, country_code } = geoData.results.at(0);
      const displayLocation = `${name} ${convertToFlag(country_code)}`;
  
      setWeatherData((prevState) => ({ ...prevState, displayLocation }));

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
      );
      const myWeather = await weatherRes.json();
  
      setWeatherData((prevState) => ({ ...prevState, weather: myWeather.daily }));

    } catch (err) {
      console.error(err);
    } finally {
      setWeatherData((prevState) => ({ ...prevState, loading: false }));
    }
  }


  return (
    <div className=" Container mx-auto mt-8 flex flex-col justify-center items-center ">
       <h1 className='text-5xl font-bold text-[#333333] '>Classic Weather </h1>
       <Search val={weatherData.location} onSearch={searchlocation} onGetWeather={fetchWeather}/>
        {weatherData.loading && <RotatingLines
  visible={true}
  height="96"
  width="96"
  color="red"
  
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />}
        {weatherData.displayLocation && <City location={weatherData.displayLocation} /> }
         {weatherData.weather && <Weather location={weatherData.location} weather= {weatherData.weather}/>}

    </div>
  );
}

export default App;
