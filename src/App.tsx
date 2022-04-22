import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import Box from '@mui/material/Box';
import Hunter from './components/Hunter';
import Digger from './components/Digger';

function App() {


  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        component='main'
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          height: '100vh',
          flexGrow: 1,
          overflow: 'auto'
        }}
      >

        <Hunter />
        <Digger />

      </Box >
    </Box >
  );
}

export default observer(App);
