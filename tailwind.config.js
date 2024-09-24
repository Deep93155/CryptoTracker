// import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "'./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'custom-dark': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
      },
    },
    },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui')],
  daisyui: {
  themes: ["forest"]
    },
}

