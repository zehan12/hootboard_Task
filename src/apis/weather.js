import axios from 'axios'

export const getWeatherData = async (cityName) => {

    const { data } = await axios.get(URL, {
        params: {
            q: cityName,
            units: 'metric',
            APPID: API_KEY
        }
    })
    return data;
}

export const getLocation = async ({ coords }) => {
    // const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.latitude}&lon=${coords?.longitude}&appid=${APIkey}`;
    const { data } = await axios.get(URL, {
        lat: coords.latitude,
        lon: coords.longitude,
        APPID: API_KEY
    })
    return data;
}