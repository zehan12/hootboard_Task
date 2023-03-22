import React, { useState, Fragment } from "react";
import { toast } from "react-hot-toast";
import { getWeatherData } from "../apis/weather";
import { RiErrorWarningFill } from "react-icons/ri"
import withRouter from "../hoc/withRouter";
import { usePosition } from "../hooks/usePostion";

const Form = ({ navigate }) => {
    const [cityName, setCityName] = useState("");
    const [weather, setWeather] = useState([]);
    const { position, error } = usePosition();


    const getcityWeather = async (cityName) => {
        try {
            const data = await getWeatherData(cityName);
            setWeather(data.data)
            toast.success("city found")
            navigate(`location/${cityName}`, { state: { weather: data.data } })

        } catch (error) {
            console.log(error, "error")
            if (error.response) return toast.error(error.response.data.message)
        }
    }

    const getUserCity = async () => {
        // const showPosition = async ({ coords }) => {
        //     const APIkey = '8a735895b3560c7dd2ad8d685835a447';
        //     const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.latitude}&lon=${coords?.longitude}&appid=${APIkey}`;
        //     const res = await fetch(URL);
        //     const data = await res.json();
        //     console.log(data)
        // }

        if (error!=="") {
            toast.custom((t) => (<div id="toast-default" class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400" role="alert">
                <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8  rounded-lg bg-red-800 text-blue-200">
                    <RiErrorWarningFill size={"26"} color={"white"} />
                </div>
                <div class="ml-3 text-black text-sm font-semibold">{error}</div>
            </div>))
        }

    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && cityName !== "") {
            getcityWeather(cityName)
            setCityName("")
        }
        return
    }

    return (
        <Fragment>
            <div className="flex items-center h-screen w-full">
                <div className="w-full bg-white rounded shadow-lg m-2 md:max-w-sm md:mx-auto">
                    <h1 className="block bg-white w-full px-4 mt-2 text-2xl mx-[10-px] font-semibold text-[#42ADFD] text-left text-grey-darkest mb-6 border-b-[1px] pb-3 border-gray-200">Wheater App</h1>

                    <div className="mb-4  mx-4 md:flex md:flex-wrap md:justify-between bg-white">
                        <div className="flex flex-col mb-4 md:w-full">
                            <input className="border py-2 px-3 text-grey-darkest placeholder:text-center focus:outline-none" type="text" name="location" placeholder="Enter city name"
                                value={cityName} onChange={(e) => setCityName(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                        </div>

                        <div className="mt-2 w-full">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center bg-white">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="bg-white border-2 border-white  px-2 text-gray-500">Or</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:w-full">
                            <button
                                onClick={getUserCity}
                                type="button" className="mx-auto py-3 my-4 text-white font-semibold rounded bg-[#42ADFD] w-[100%]">
                                Get Device Location
                            </button>
                        </div>  </div>
                </div>
            </div>
        </Fragment>
    )
}

export default withRouter(Form);

