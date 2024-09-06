/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            screens: {
                tall: { raw: "(min-height: 900px)" },
                // => @media (min-height: 800px) { ... }
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                extended: ['"NeoGram Black Ext"'],
                extraboldExt: ['"NeoGram ExtraBold Ext"'],
                regularExt: ['"NeoGram Regular Ext"'],
            },
            keyframes: {
                gravity: {
                    "0%": {
                        transform: "translateY(0)",
                    },
                    "50%": {
                        transform: "translateY(-30px)",
                        rotate: "10deg",
                    },
                    "100%": {
                        transform: "translateY(0)",
                    },
                },
            },
        },
        animation: {
            gravity: "gravity 5s infinite linear",
        },
    },
    plugins: [],
};
