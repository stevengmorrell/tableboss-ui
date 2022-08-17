import { createTheme } from "@mui/material/styles";
import "@fontsource/inter";

export const appTheme = createTheme({
  typography: {
    fontFamily: ["Inter", "serif"].join(","),
  },
});
