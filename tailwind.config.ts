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
      },
      colors: {
        gray: {
          g1: 'rgb(26,26,26)',
          g2: 'rgb(51,51,51)',
        },
        yellow: {
          y1: '#FAC21C'
        }
      },
      boxShadow: {
        thin: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em'
      }
    },
  },
  plugins: [],
};
export default config;
