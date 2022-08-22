const base = require("config/postcss.config");

module.exports = {
  ...base,
  plugins: {
    tailwindcss: {},
    "postcss-focus-visible": {
      replaceWith: "[data-focus-visible-added]",
    },
    autoprefixer: {},
  },
};
