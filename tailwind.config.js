module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false,
    theme: {
      extend: {
        colors: {
          brown: {
            600: "#8d6e63",
          },
          gray: {
            50: "#fafafa",
            100: "#f4f4f4",
            200: "#e5e5e5",
            300: "#d4d4d4",
            700: "#4a4a4a",
            800: "#2a2a2a",
          },
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };
  