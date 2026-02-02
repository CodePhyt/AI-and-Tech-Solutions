import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#006064", // Deep Teal
                    light: "#00838F",
                    dark: "#004D40",
                },
                secondary: {
                    DEFAULT: "#F5F5DC", // Warm Sand
                    dark: "#E8E8C0",
                },
                accent: {
                    DEFAULT: "#C5A059", // Muted Gold
                    glow: "rgba(197, 160, 89, 0.4)",
                },
                background: {
                    DEFAULT: "#0a0e1a",
                    secondary: "#020617",
                },
                crystal: {
                    white: "rgba(255, 255, 255, 0.03)",
                    border: "rgba(255, 255, 255, 0.08)",
                }
            },
            backgroundImage: {
                "agency-gradient": "linear-gradient(to bottom, rgba(0, 96, 100, 0.5), rgba(10, 14, 26, 1))",
                "gold-gradient": "linear-gradient(to right, #C5A059, #B08D47)",
            },
            boxShadow: {
                "gold-glow": "0 0 20px rgba(197, 160, 89, 0.3)",
            }
        },
    },
    plugins: [],
};

export default config;
