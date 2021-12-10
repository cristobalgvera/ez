/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
const tailwindConfig = {
  mode: 'jit',
  content: ['src/**/*.{js,ts,jsx,tsx}', 'public/**/*.html'],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = tailwindConfig;
