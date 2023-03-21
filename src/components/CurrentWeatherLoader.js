import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CurrentWeatherLoader = () => {
    
    const [currentWeather, setCurrentWeather] = useState(null);
    const [dailyWeather, setDailyWeather] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get('https://api.openweathermap.org/data/3.0/onecall?lat=37.7560855&lon=-122.2308277&appid=2527277900597fb91adae3d61344b49e&units=imperial');
            setCurrentWeather(response.data.current);
            setDailyWeather(response.data.daily);
        })();
    }, [])

    return (
        <>
            {currentWeather && 
                <div style={{width:'50%', float:'left', display:'inline-block'}}>
                    <h3>
                        Current Weather
                    </h3>
                    <ul>
                        <li>
                            {currentWeather.temp} &deg;F
                        </li>
                        <li>
                            {currentWeather.weather && currentWeather.weather[0].description}
                        </li>
                        <li>
                            {currentWeather.humidity}% humidity
                        </li>
                        <li>
                            wind {currentWeather.wind_speed} m.p.h.
                        </li>
                    </ul>
                </div>
            }
        </>
    );
}