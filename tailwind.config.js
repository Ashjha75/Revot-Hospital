// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {

//       keyframes: {
//         wave: {
//           '0%': { transform: 'rotate(0.0deg)' },
//           '10%': { transform: 'rotate(14deg)' },
//           '20%': { transform: 'rotate(-8deg)' },
//           '30%': { transform: 'rotate(14deg)' },
//           '40%': { transform: 'rotate(-4deg)' },
//           '50%': { transform: 'rotate(10.0deg)' },
//           '60%': { transform: 'rotate(0.0deg)' },
//           '100%': { transform: 'rotate(0.0deg)' },
//         },
//     },
//     animation: {
//       'waving-hand': 'wave 2s linear infinite',
//     },
//   },

//   plugins: [],
// };

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkmode: "class",
  theme: {
    screens: {
      'xsm': { 'max': "300px" },
      // => @media (min-width: 640px) { ... }

      md: "830px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      // backgroundcolor: {
      //   primary: "var(--color-bg-primary)",
      //   secondary: "var(--color-bg-secondary)",
      // },
      // textColor: {
      //   accent: "var(--color-text-accent)",
      //   primary: "var(--color-text-primary)",
      //   secondary: "var(--color-text-secondary)",
      // },
      // animation: {
      //   "waving-hand": "wave 2s linear infinite",
      // },
    },
  },
  plugins: [],
};
