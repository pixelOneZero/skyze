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
                            return <div>{daily.temp.day}</div>
                        })}
                </div>
            }
        </>
    );
}