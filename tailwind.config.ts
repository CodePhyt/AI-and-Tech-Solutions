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
                    DEFAULT: "#00f3ff", // Neon Blue
                    dim: "#00a0a8",
                    dark: "#004D40",
                },
                secondary: {
                    DEFAULT: "#d4af37", // Matte Gold
                    dim: "#aa8c2c",
                    dark: "#8a7020",
                },
                background: {
                    DEFAULT: "#0f0f0f", // Deep Charcoal
                    darker: "#050505",
                    lighter: "#1a1a1a",
                },
                accent: {
                    DEFAULT: "#d4af37",
                    glow: "rgba(0, 243, 255, 0.4)",
                },
                crystal: {
                    white: "rgba(255, 255, 255, 0.03)",
                    border: "rgba(255, 255, 255, 0.08)",
                }
            },
            backgroundImage: {
                "tech-gradient": "linear-gradient(to bottom, #0f0f0f, #050505)",
                "neon-blue-gradient": "linear-gradient(to right, #00f3ff, #006064)",
                "gold-gradient": "linear-gradient(to right, #d4af37, #aa8c2c)",
            },
            boxShadow: {
                "neon-glow": "0 0 20px rgba(0, 243, 255, 0.3)",
                "gold-glow": "0 0 20px rgba(212, 175, 55, 0.3)",
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
                mono: ['var(--font-roboto-mono)', 'ui-monospace', 'SFMono-Regular'],
            },
        },
    },
    plugins: [],
};

export default config;
