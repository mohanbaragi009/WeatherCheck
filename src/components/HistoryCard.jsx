import React, { useState } from 'react';

const HistoryCard = ({ data, onDateSubmit, city }) => {
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (date && city) {
            onDateSubmit(date);
        }
    };

    return (
        <div className="bg-white/5 p-6 rounded-xl border border-glassBorder backdrop-blur-sm mt-6">
            <h3 className="text-xl font-bold mb-4">Historical Weather</h3>

            <form onSubmit={handleSubmit} className="flex gap-4 mb-4">
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="flex-1 bg-glassBorder rounded-lg px-4 py-2 text-white/90 focus:outline-none focus:ring-1 focus:ring-white/50"
                    max={new Date().toISOString().split('T')[0]}
                />
                <button type="submit" className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition border border-glassBorder">
                    Check Date
                </button>
            </form>

            {data && data.historical && (
                <div className="mt-4">
                    {Object.entries(data.historical).map(([dateKey, info]) => (
                        <div key={dateKey} className="space-y-2 animate-pulse-once">
                            <div className="flex justify-between items-center">
                                <span className="font-medium opacity-80">{dateKey}</span>
                                <span className="text-2xl font-bold">{info.avgtemp}°c Avg</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-sm text-center">
                                <div className="bg-black/10 p-2 rounded">Min: {info.mintemp}°c</div>
                                <div className="bg-black/10 p-2 rounded">Max: {info.maxtemp}°c</div>
                                <div className="bg-black/10 p-2 rounded">Sun: {info.sunhour}h</div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HistoryCard;
