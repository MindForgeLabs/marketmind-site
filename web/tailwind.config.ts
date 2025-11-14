import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{ts,tsx,md,mdx}",
        "./src/components/**/*.{ts,tsx,md,mdx}",
        "./src/pages/**/*.{ts,tsx,md,mdx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};

export default config;