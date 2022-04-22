import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';

import { useStore } from "./hooks/useStore";

import Hunter from './components/Hunter';
import Digger from './components/Digger';

function App() {
  const { total } = useStore()

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
        <Container>

          <Hunter />
          <Digger />

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Summary</Typography>
            </AccordionSummary>

            <AccordionDetails>

              {total
                .sort((a, b) => a.count > b.count ? -1 : 1)
                .map(item => (
                  <Typography
                    key={item.name}
                    color={item.count < 0 ? 'red' : 'green'}
                  >
                    {item.title}: {item.count}
                  </Typography>
                ))}

            </AccordionDetails>
          </Accordion>

        </Container>
      </Box >
    </Box >
  );
}

export default observer(App);
