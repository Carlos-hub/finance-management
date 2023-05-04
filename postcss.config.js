// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }
// https://stackoverflow.com/questions/64032166/tailwindcss-not-working-with-next-js-what-is-wrong-with-the-configuration
// postcss.config.js
const { join } = require('path');

module.exports = {
  plugins: {
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.js'),
    },
    autoprefixer: {},
  },
};