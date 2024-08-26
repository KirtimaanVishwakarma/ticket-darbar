import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      minHeight: {
        480: '480px'
      }
      ,
      colors: {
        gray: {
          g1: 'rgb(26,26,26)',
          g2: 'rgb(51,51,51)',
        }
      }
    },
  },
  plugins: [],
};
export default config;
