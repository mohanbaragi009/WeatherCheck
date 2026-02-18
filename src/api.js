import axios from 'axios';

const API_KEY = 'e6941986eec5f70e1238acd948ee73e1';
const BASE_URL = 'https://api.weatherstack.com';

const api = axios.create({
    baseURL: BASE_URL,
    params: {
        access_key: API_KEY,
    },
});

export const fetchCurrentWeather = async (query) => {
    try {
        const response = await api.get('/current', {
            params: { query },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching current weather:', error);
        throw error;
    }
};

export const fetchHistoricalWeather = async (query, date) => {
    try {
        const response = await api.get('/historical', {
            params: {
                query,
                historical_date: date,
                hourly: 1
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching historical weather:', error);
        throw error;
    }
};

export const fetchMarineWeather = async (query) => {
    // Note: Weatherstack marine endpoint generally uses lat/lon or query similar to others.
    // Documentation says it's for marine weather.
    try {
        const response = await api.get('/marine', {
            params: {
                query: query,
                hourly: 1
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching marine weather:', error);
        throw error;
    }
};
