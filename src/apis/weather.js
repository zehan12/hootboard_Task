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

export const getLocation = async ({ lat, lon }) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`)
    // const res = await axios.get(URL, {
    //     lat: String(lat),
    //     lon: String(lon),
    //     appid: APIKEY
    // })
    return res;
}