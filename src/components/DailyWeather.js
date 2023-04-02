import React, { useState, useEffect } from 'react';


export const DailyWeather = (props) => {
    
    const dailyWeatherData = props.weatherData;

    return (
        <>
            {dailyWeatherData && 
                <div className="card">
                    <h3>
                        Daily Forecast
                    </h3>
                        {dailyWeatherData.map((daily) => {
                            return <div key={daily.dt}>
                                        {daily.temp.day}
                                        <img src={`https://openweathermap.org/img/wn/${daily.weather[0].icon}.png`} align="absmiddle" />
                                    </div>
                        })}
                </div>
            }
        </>
    );
}