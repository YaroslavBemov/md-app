import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { useStore } from "./hooks/useStore";

import ButtonAppBar from "./features/ButtonAppBar";
import StickyFooter from "./features/StickyFooter";
import { Outlet } from "react-router-dom";

function App() {
  const { uiStore } = useStore();

  useEffect(() => {
    const mode = localStorage.getItem("mode");
    if (mode === "dark" || mode === "light") {
      uiStore.setMode(mode);
    }
  }, [uiStore]);

  const { mode } = uiStore;

  const theme = createTheme({
    palette: {
      mode,
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        "MedievalSharp",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "cursive",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <ButtonAppBar />
        <Outlet />
        <StickyFooter />
      </Box>
    </ThemeProvider>
  );
}

export default observer(App);
