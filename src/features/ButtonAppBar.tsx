import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { useStore } from "../hooks/useStore";
import { observer } from "mobx-react-lite";

const ButtonAppBar = () => {
  const { uiStore, saveAll, clearAll } = useStore();
  const { mode } = uiStore;

  const handleModeClick = () => uiStore.toggleMode();
  const handleSaveClick = () => saveAll();
  const handleRemoveClick = () => clearAll();

  return (
    <AppBar
      position="absolute"
      sx={{
        position: "relative",
        borderBottom: (t) => `1px solid ${t.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Medieval Dynasty Tools Calculator
          </Typography>
          <Button variant="contained" color="success" onClick={handleSaveClick}>
            Save
          </Button>
          <Button
            sx={{ ml: 1 }}
            variant="contained"
            color="error"
            onClick={handleRemoveClick}
          >
            Clear
          </Button>
          <IconButton sx={{ ml: 1 }} onClick={handleModeClick} color="inherit">
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default observer(ButtonAppBar);
