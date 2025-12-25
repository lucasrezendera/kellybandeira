import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#fcfaf9',
                    100: '#f6f1ed',
                    200: '#efe5dd',
                    300: '#e0cdc1',
                    400: '#cfb0a0',
                    500: '#bf9480',
                    600: '#b1806b',
                    700: '#946857',
                    800: '#7c584b',
                    900: '#654a40',
                },
            },
            fontFamily: {
                sans: ['var(--font-lato)', 'sans-serif'],
                serif: ['var(--font-playfair)', 'serif'],
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
        },
    },
    safelist: [
        'reveal-base',
        'reveal-visible',
        {
            pattern: /^reveal-hidden-/,
        },
    ],
    plugins: [],
};

export default config;
