import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center space-x-4 mb-8">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter city..."
                className="flex-1 bg-glassBorder backdrop-blur-sm border border-glassBorder rounded-full px-6 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
            <button
                type="submit"
                className="bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm border border-glassBorder"
            >
                <FaSearch />
            </button>
        </form>
    );
};

export default SearchBar;
