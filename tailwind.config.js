/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                glass: "rgba(255, 255, 255, 0.25)",
                glassBorder: "rgba(255, 255, 255, 0.125)",
                glassText: "rgba(255, 255, 255, 0.9)",
            },
            backdropBlur: {
                xs: '2px',
            }
        },
    },
    plugins: [],
}
