import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4">
            <div className="bg-glass backdrop-blur-md border border-glassBorder rounded-2xl shadow-2xl p-8 w-full max-w-4xl text-glassText">
                {children}
            </div>
        </div>
    );
};

export default Layout;
