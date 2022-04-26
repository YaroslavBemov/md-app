import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useStore } from "./hooks/useStore";

import Store from "./components/Store/Store";
import Total from "./components/Total";
import ButtonAppBar from "./components/ButtonAppBar";
import { Mode } from "./store/UiStore";


function App() {
  const {
    total,
    hunterStore,
    excavationShedStore,
    woodshedStore,
    smithyStore,
    uiStore
  } = useStore();

  useEffect(() => {
    const mode = localStorage.getItem('mode')
    if (mode === 'dark' || mode === 'light') {
      uiStore.setMode(mode)
    }
  }, [])

  const { mode } = uiStore

  const theme = createTheme({
    palette: {
      mode
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        'MedievalSharp',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'cursive',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            height: "100vh",
            flexGrow: 1,
            overflow: "auto",
          }}
        >
          <Container>
            <ButtonAppBar />
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Hunting</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Store store={hunterStore} />
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Extraction</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Store store={excavationShedStore} />
                <Store store={woodshedStore} />
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Production</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Store store={smithyStore} />
              </AccordionDetails>
            </Accordion>

            <Total total={total} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default observer(App);
