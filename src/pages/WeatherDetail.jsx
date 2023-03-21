import { Fragment } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl"
import { BsThermometerSun, BsDropletHalf } from "react-icons/bs";

const WeatherDetail = () => {
    return (
        <Fragment>
            <div className="w-full bg-white rounded shadow-lg m-2 md:max-w-sm md:mx-auto cursor-pointer flex flex-col justify-center items-center text-center border-none">
                <div className="text-md text-xl text-left w-full font-semibold  text-[#42ADFD] p-4 border-b-2 border-b-gray-300 flex items-center gap-2">
                    <span><BiLeftArrowAlt size={29} /></span>
                    <span className="uppercase">Weather App</span>
                </div>
                <div className="w-32 h-32 flex items-center justify-center mt-9">
                    <img className="" src="/images/11n.png" />
                </div>
                <div className="text-6xl font-semibold text-gray-900 mb-3">13º C</div>
                <p className="text-gray-700 font-semibold  mb-2">Broken Clouds</p>
                <div className="flex items-center justify-center gap-1">
                    <SlLocationPin className="mb-2" size={"17"} />
                    <p class="text-gray-700 font-semibold  mb-2">Kathmandu, Nepal</p>
                </div>


                <div class="flex justify-between w-full mt-5 border-t-2 border-gray-300 m-0">
                    <div class="flex items-center justify-center gap-1 w-full py-3 text-gray-700 border-r-2 border-gray">
                        <BsThermometerSun color={"#42ADFD"} size={"30"} />
                        <div className='flex flex-col leading-3'>
                            <div className="text-left font-semibold">
                                17<sup>º</sup>C
                            </div>
                            <div className='text-xs font-semibold'>
                                Feels like
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-center items-center gap-1 w-full py-3">
                        <div class="flex items-center justify-center gap-1 w-full py-3 text-gray-700 border-r-2 border-gray">
                            <BsDropletHalf color={"#42ADFD"} size={"30"} />
                            <div className='flex flex-col leading-3'>
                                <div className="text-left font-semibold">
                                    84%
                                </div>
                                <div className='text-xs font-semibold'>
                                    Humidity
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default WeatherDetail;
