import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { useStore } from '../hooks/useStore';
import { observer } from 'mobx-react-lite';


const ButtonAppBar = () => {
  const { uiStore, saveAll } = useStore()
  const { mode } = uiStore

  const handleModeClick = () => uiStore.toggleMode()
  const handleSaveClick = () => saveAll()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Medieval Dynasty Tools Calculator
          </Typography>
          <Button onClick={handleSaveClick}>Save</Button>
          <IconButton sx={{ ml: 1 }} onClick={handleModeClick} color="inherit">
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default observer(ButtonAppBar)
