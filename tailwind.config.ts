import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "28px": "28px",
        "40px": "40px"
      },
      colors: {
        'blackColor': '#1D0C07',
        'whiteColor': '#FFFFFF',
      }
    },
  },
  plugins: [],
};
export default config;
