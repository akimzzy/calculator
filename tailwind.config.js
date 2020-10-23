module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      height: {
        "12": "10rem",
        "9.5v": "95vh",
        "10v": "100vh",
      },
      width: {
        "35": "20rem",
      },
      gridTemplateColumns: {
        "50": "repeat(4, 1fr)",
      },
      gridTemplateRows: {
        "60": "repeat(5, 1fr)",
      },
      flex: {
        "70": "0 0 70%",
        "100": "0 0 100%",
        "30": "0 0 30%",
      },
    },

    colors: {
      darkk: "#010132",
      dark: "#00002b",
      white: "#fff",
      blue: "#0eaeae",
      lightt: "#aca9a9",
    },    
    
  },
  variants: {},
  plugins: [],
};
