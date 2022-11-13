/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui'), require('@tailwindcss/typography')],
    daisyui: {
        themes: [
            'night',
            'light',
            'luxury',
            'retro',
            'dark',
            {
                light: {
                    ...require('daisyui/src/colors/themes')['[data-theme=light]'],
                    primary: '#880808',
                },
            },
            {
                luxury: {
                    ...require('daisyui/src/colors/themes')['[data-theme=luxury]'],
                    primary: '#880808',
                    'primary-content': '#ffffff',
                },
            },
        ],
    },
};
