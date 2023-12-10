import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsla(223, 49%, 8%, 1)",
        "medium-dark-blue": "hsla(221, 55%, 11%, 1)",
        "medium-blue": "hsla(221, 58%, 13%, 1)",
        "light-blue": "hsla(198, 94%, 36%, 1)",
        "medium-turquoise": "hsla(191, 86%, 41%, 1)",
        "turquoise-25": "hsla(191, 86%, 41%, 0.25)",
        "turquoise-6": "hsla(191, 86%, 41%, 0.06)",
        "turquoise-0": "hsla(191, 86%, 41%, 0)",
        "medium-purple": "hsla(259, 94%, 35%,1)",
      },
      animation: {
        cursor: "cursor .6s linear infinite alternate",
      },
      keyframes: {
        cursor: {
          "0%, 40%": { opacity: "0" },
          "60%, 100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
