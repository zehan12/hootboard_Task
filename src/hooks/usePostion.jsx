import { useState, useEffect } from "react";
export const usePosition = () => {
    const [position, setPosition] = useState({});
    const [positionError, setPositionError] = useState(null);

    const showPosition = async ({ coords }) => {
        setPosition({
            lat: coords["latitude"],
            lon: coords["longitude"]
        })
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            setPositionError("Geolocation is not supported by this browser.");
        }
    }, []);
    return { position, positionError };
}