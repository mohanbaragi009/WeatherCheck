import React from 'react';

const WeatherCard = ({ data }) => {
    if (!data) return null;

    const { current, location } = data;

    return (
        <div className="bg-white/10 p-6 rounded-xl border border-glassBorder backdrop-blur-sm">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-3xl font-bold">{location.name}</h2>
                    <p className="text-lg opacity-80">{location.country}</p>
                    <p className="text-sm opacity-60">{location.localtime}</p>
                </div>
                <div className="text-right">
                    <img src={current.weather_icons[0]} alt={current.weather_descriptions[0]} className="w-16 h-16 rounded-lg inline-block" />
                    <p className="mt-2 font-medium">{current.weather_descriptions[0]}</p>
                </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
                <div>
                    <h1 className="text-6xl font-bold">{current.temperature}°c</h1>
                    <p className="mt-2 text-lg">Feels like {current.feelslike}°c</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm opacity-90">
                    <div className="flex flex-col">
                        <span className="opacity-60">Wind</span>
                        <span className="font-semibold">{current.wind_speed} km/h {current.wind_dir}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="opacity-60">Humidity</span>
                        <span className="font-semibold">{current.humidity}%</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="opacity-60">Pressure</span>
                        <span className="font-semibold">{current.pressure} mb</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="opacity-60">UV Index</span>
                        <span className="font-semibold">{current.uv_index}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
