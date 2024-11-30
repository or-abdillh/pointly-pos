/** @type {import('tailwindcss').Config} */
export default {
    content: [
        'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
        'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                "sans": ["Roboto", "sans-serif"],
                "primary": ["Poppins", "sans-serif"],
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}

