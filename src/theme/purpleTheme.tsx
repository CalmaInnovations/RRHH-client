import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: "#35B1F6",
        },
        secondary: {
            main: "#543884",
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
      fontFamily: '"Poppins", sans-serif', // Aquí se aplica la fuente Poppins
    },
});
