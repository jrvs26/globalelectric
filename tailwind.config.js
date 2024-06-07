const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  flowbite.content(),
],
  theme: {
    extend: {},
    variant: {
      textColor: [ 'responsive', 'hover', 'focus', 'active' ]
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

