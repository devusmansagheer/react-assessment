import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7C3AED", // Purplish primary
    },
    secondary: {
      main: "#A78BFA", // Lighter purple secondary
    },
    background: {
      default: "#F5F3FF", // Very light purple background
      paper: "#fff",
    },
  },
  typography: {
    fontFamily: "Inter, Roboto, Arial, sans-serif",
    h3: {
      fontWeight: 700,
      fontSize: "2.2rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.1rem",
      letterSpacing: 0.2,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
