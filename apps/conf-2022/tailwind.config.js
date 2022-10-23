const base = require("config/tailwind.config");

module.exports = {
  ...base,
  theme: {
    ...base.theme,
    extend: {
      colors: {
        primary: "#FFC736",
      },
    },
  },
};
