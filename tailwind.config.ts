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
                    DEFAULT: "#00d4ff", // Neon Cyan
                    dim: "#009dbd",
                    dark: "#006680",
                },
                secondary: {
                    DEFAULT: "#ffd700", // Matte Gold
                    dim: "#ccac00",
                    dark: "#998200",
                },
                background: {
                    DEFAULT: "#0a0a0a", // Void Black
                    darker: "#121212", // Deep Carbon
                    lighter: "#1a1a1a",
                },
                accent: {
                    DEFAULT: "#ffd700",
                    glow: "rgba(0, 212, 255, 0.4)",
                },
                crystal: {
                    white: "rgba(255, 255, 255, 0.03)",
                    border: "rgba(255, 255, 255, 0.08)",
                }
            },
            backgroundImage: {
                "tech-gradient": "linear-gradient(to bottom, #0a0a0a, #121212)",
                "neon-blue-gradient": "linear-gradient(to right, #00d4ff, #006680)",
                "gold-gradient": "linear-gradient(to right, #ffd700, #ccac00)",
            },
            boxShadow: {
                "neon-glow": "0 0 20px rgba(0, 212, 255, 0.3)",
                "gold-glow": "0 0 20px rgba(255, 215, 0, 0.3)",
            },
            fontFamily: {
                sans: ['var(--font-space-grotesk)', 'var(--font-inter)', 'ui-sans-serif', 'system-ui'],
                body: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
                mono: ['ui-monospace', 'SFMono-Regular'],
            },
        },
    },
    plugins: [],
};

export default config;
