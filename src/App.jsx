import { useEffect, useState } from 'react'
import './App.css'
import Form from './pages/Form'
import WeatherDetail from './pages/WeatherDetail'


const App = () => {

  const [weatherData, setWeatherData] = useState([])

  const getcityWeather = async (location) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=5e2a6dff2f070b7cc434af93e5e4d950`);
    const data = await res.json();
    console.log(data)
    setWeatherData(data)
  }

  const getUserCity = async () => {
    const showPosition = async ({ coords }) => {
      const APIkey = '8a735895b3560c7dd2ad8d685835a447';
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.latitude}&lon=${coords?.longitude}&appid=${APIkey}`;
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data)
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  useEffect(()=>{
    getcityWeather("udaipur")
  },[])


  return (<div className='container flex items-center justify-center h-[90vh]'>
    {/* <Form /> */}
    <WeatherDetail data={weatherData} />
  </div>)
}

export default App
