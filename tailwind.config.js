module.exports = {
    mode: "jit",
    content: [
      "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
    ],
    darkMode: "class",
    theme: {
      screens: {
        lg: { max: "1440px" },
        md: { max: "1050px" },
        sm: { max: "550px" },
      },
      extend: {
        colors: {
          black: {
            900: "var(--black_900)",
            "900_2a": "var(--black_900_2a)",
            "900_66": "var(--black_900_66)",
            "900_7f": "var(--black_900_7f)",
            "900_89": "var(--black_900_89)",
            "900_b2": "var(--black_900_b2)",
            "900_cc": "var(--black_900_cc)",
          },
          blue: {
            a400: "var(--blue_a400)",
          },
          blue_gray: {
            100: "var(--blue_gray_100)",
          },
          gray: {
            700: "var(--gray_700)",
          },
          light_green: {
            100: "var(--light_green_100)",
            900: "var(--light_green_900)",
          },
          red: {
            500: "var(--red_500)",
          },
          white: {
            a700: "var(--white_a700)",
            a700_14: "var(--white_a700_14)",
          },
        },
        boxShadow: {
          xs: "0 2px 3px 0 #0000002a",
        },
        fontFamily: {
          inter: "Inter",
          poppins: "Poppins",
          newsreader: "Newsreader",
          manrope: "Manrope",
          roboto: "Roboto",
          helvetica: "Helvetica",
        },
      },
    },
    plugins: [require("@tailwindcss/forms")],
  };
  