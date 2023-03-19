import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CurrentWeatherLoader = () => {
    
    const [weather, setWeather] = useState({});

    useEffect(() => {
        (async () => {
            const response = await axios.get('https://api.openweathermap.org/data/3.0/onecall?lat=37.7560855&lon=-122.2308277&appid=2527277900597fb91adae3d61344b49e');
            setWeather(response.data);
            console.log(response.data);
        })();
    }, [])

    return (
        <>
            <code>
                {JSON.stringify(weather)}
            </code>
        </>
    );
}