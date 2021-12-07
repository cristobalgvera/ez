/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
const tailwindConfig = {
  mode: 'jit',
  purge: ['src/**/*.{js,ts,jsx,tsx}', 'public/**/*.html'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = tailwindConfig;
