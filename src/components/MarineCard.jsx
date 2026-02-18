import React from 'react';

const MarineCard = ({ data, error }) => {
    // If API plan doesn't support it, or error
    if (error) {
        return (
            <div className="bg-white/5 p-6 rounded-xl border border-glassBorder backdrop-blur-sm mt-6">
                <h3 className="text-xl font-bold mb-2">Marine Weather</h3>
                <div className="bg-red-500/20 text-red-100 p-3 rounded border border-red-500/30 text-sm">
                    {error.info || "Marine data unavailable (Check API plan)"}
                </div>
            </div>
        )
    }

    if (!data) return null;

    return (
        <div className="bg-white/5 p-6 rounded-xl border border-glassBorder backdrop-blur-sm mt-6">
            <h3 className="text-xl font-bold mb-4">Marine Weather</h3>
            <p className="text-sm opacity-70 mb-2">Note: Marine data integration depends on plan access.</p>

            <div className="text-center italic opacity-60">
                {/* 
                Structure typically involves tides, swell, etc. 
                Rendering raw JSON for debug/verification as structure varies.
            */}
                <pre className="text-xs text-left overflow-auto max-h-40 bg-black/20 p-2 rounded">
                    {JSON.stringify(data, null, 2)}
                </pre>
            </div>
        </div>
    );
};

export default MarineCard;
