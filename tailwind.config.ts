import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Brygada: ['Brygada_1918', 'sans-serif'],
        Rasa: ['Rasa', 'sans-serif'],
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
