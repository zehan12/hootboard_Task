import axios from 'axios';
import { URL } from "../constants/urls"
import { APIKEY, API_KEY } from '../constants/key';

export const getWeatherData = async (cityName) => {

    const res = await axios.get(URL, {
        params: {
            q: cityName,
            units: 'metric',
            APPID: APIKEY
        }
    })
    return res;
}

export const getLocation = async ({ coords }) => {
    // const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.latitude}&lon=${coords?.longitude}&appid=${APIkey}`;
    const { data, res } = await axios.get(URL, {
        lat: coords.latitude,
        lon: coords.longitude,
        APPID: API_KEY
    })
    return [data, res];
}