import { useState } from "react";

const Form = () => {

    const [location, setLocation] = useState("");

    const getUserCity = () => {

    }

    return (
        <Fragment>
            <div className="flex items-center h-screen w-full">
                <div className="w-full bg-white rounded shadow-lg m-2 md:max-w-sm md:mx-auto">
                    <h1 className="block bg-white w-full px-4 mt-2 text-2xl mx-[10-px] font-semibold text-[#42ADFD] text-left text-grey-darkest mb-6 border-b-[1px] pb-3 border-gray-200">Wheater App</h1>

                    <div className="mb-4  mx-4 md:flex md:flex-wrap md:justify-between bg-white">
                        <div className="flex flex-col mb-4 md:w-full">
                            <input className="border py-2 px-3 text-grey-darkest placeholder:text-center focus:outline-none" type="text" name="location" placeholder="Enter city name"
                                value={location} onChange={(e) => setLocation(e.target.value)}
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


export default Form;

