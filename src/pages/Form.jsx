import React, { useState, Fragment } from "react";
import { toast } from "react-hot-toast";
import { getLocation, getWeatherData } from "../apis/weather";
import { RiErrorWarningFill } from "react-icons/ri"
import withRouter from "../hoc/withRouter";
import { usePosition } from "../hooks/usePostion";
import Toaster from "../components/Toster";

const Form = ({ navigate }) => {
    const [cityName, setCityName] = useState("");
    const { position, positionError } = usePosition();

    const getcityWeather = async (cityName) => {
        try {
            const data = await getWeatherData(cityName);
            toast.success("city found")
            navigate(`location/${cityName}`, { state: { weather: data.data } })

        } catch (error) {
            console.log(error, "error")
            if (error.response) return toast.error(error.response.data.message)
        }
    }

    const getUserCity = async () => {
        try {
            if (positionError) {
                toast.custom((t) => (<Toaster
                    icon={RiErrorWarningFill}
                    message={positionError}
                />))
            }
            else {
                const data = await getLocation(position);
                toast.success("city found", cityName)
                if (data?.data?.name) navigate(`location/${data.data.name}`, { state: { weather: data.data } })
            }
        } catch (error) {
            console.log(error, "error")
            if (error.response) return toast.error(error.response.data.message)
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && cityName !== "" ) {
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

