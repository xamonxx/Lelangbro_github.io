/** @type {import('tailwindcss').Config} */
module.exports = {
    daisyui: {
      themes: [
        "light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter",
        "dim",
        "nord",
        "sunset",
      ],
    },
  content: [
    "./src/index.html",
    "./src/register.html",
    "./src/login.html",
     // sesuaikan dengan struktur folder Anda
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}