/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-image":
          "linear-gradient(rgba(30,30,30,0.6), rgba(30,30,30,0.6)),linear-gradient(rgba(30,30,30,0.6), rgba(30,30,30,0.6)), url('/agriculture.png')",
        "product-background":
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/product-background.png'); center/covor",
      },
      colors: {
        "custom-green": "#204E51",
      },
      boxShadow: {
        custom: "-33px -20px 66px -19px rgba(0, 0, 0, 1)",
        ourservice: "0 5px 4px rgba(0,0,0,0.4);",
      },
    },
  },
  plugins: [],
};
