import React, { useState } from 'react';
import Layout from './components/Layout';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import HistoryCard from './components/HistoryCard';
import MarineCard from './components/MarineCard';
import { fetchCurrentWeather, fetchHistoricalWeather, fetchMarineWeather } from './api';

function App() {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [historyWeather, setHistoryWeather] = useState(null);
    const [marineWeather, setMarineWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [marineError, setMarineError] = useState(null);

    const handleSearch = async (query) => {
        setLoading(true);
        setError(null);
        setMarineError(null);
        setCurrentWeather(null);
        setHistoryWeather(null);
        setMarineWeather(null);

        try {
            // 1. Fetch Current Weather
            const currentData = await fetchCurrentWeather(query);
            if (currentData.error) {
                throw new Error(currentData.error.info);
            }
            setCurrentWeather(currentData);

            // 2. Try Fetching Marine (might fail depending on plan/location)
            try {
                const marineData = await fetchMarineWeather(query);
                if (marineData.error) {
                    setMarineError(marineData.error);
                } else {
                    setMarineWeather(marineData);
                }
            } catch (e) {
                setMarineError({ info: "Could not fetch marine data" });
            }

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleHistorySearch = async (date) => {
        if (!currentWeather) return;
        try {
            const historyData = await fetchHistoricalWeather(currentWeather.location.name, date);
            if (historyData.error) {
                alert(historyData.error.info);
            } else {
                setHistoryWeather(historyData);
            }
        } catch (err) {
            console.error(err);
            alert("Failed to fetch history");
        }
    };

    return (
        <Layout>
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                    Atmosphere
                </h1>
                <p className="text-glassText mt-2">Global Weather Intelligence</p>
            </header>

            <SearchBar onSearch={handleSearch} />

            {error && (
                <div className="bg-red-500/20 text-red-100 p-4 rounded-xl border border-red-500/30 mb-6 text-center">
                    {error}
                </div>
            )}

            {loading && (
                <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
                </div>
            )}

            {!loading && currentWeather && (
                <div className="space-y-6">
                    <WeatherCard data={currentWeather} />

                    <div className="grid md:grid-cols-2 gap-6">
                        <HistoryCard
                            data={historyWeather}
                            onDateSubmit={handleHistorySearch}
                            city={currentWeather.location.name}
                        />
                        <MarineCard data={marineWeather} error={marineError} />
                    </div>
                </div>
            )}
        </Layout>
    );
}

export default App;
