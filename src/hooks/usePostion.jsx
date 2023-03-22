import { useState, useEffect } from "react";
export const usePosition = () => {
    const [position, setPosition] = useState({});
    const [error, setError] = useState(null);

    const showPosition = async ({ coords }) => {
        setPosition({
            lat: coords["latitude"],
            lon: coords["longitude"]
        })
    }

    useEffect(() => {
        if (navigator.geolocation) {
            setError("Geolocation is not supported by this browser.");

            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    }, []);
    return { position, error };
}