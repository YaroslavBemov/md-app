import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { hunter } from './data/mining'
import Button from '@mui/material/Button';
import { useStore } from './hooks/useStore';
import { observer } from 'mobx-react-lite';


function App() {
  const { hunterStore } = useStore()

  const handleAdd = () => {

  }
  const handleRemove = () => {

  }

  const handleShow = () => {

  }

  const handleChange = (event: any) => {
    let { name, value } = event.target

    hunterStore.changeCount(name, Number(value))
  }

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
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Hunter</Typography>
          </AccordionSummary>

          {hunterStore.items.map(item => (
            <AccordionDetails key={item.name}>
              <Paper
                elevation={3}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                }}>
                {item.title}

                {/* <IconButton onClick={handleAdd}>
                  <AddIcon />
                </IconButton>
                <IconButton onClick={handleRemove}>
                  <RemoveIcon />
                </IconButton> */}

                <TextField
                  type='number'
                  name={item.name}
                  value={item.count}
                  onChange={handleChange}
                  label='Count'
                  sx={{
                    maxWidth: 80,
                    ml: 2
                  }}
                >
                  {item.count}
                </TextField>
              </Paper>
            </AccordionDetails>
          ))}

        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Summary</Typography>
          </AccordionSummary>

          <AccordionDetails>

            {hunterStore.totalTools?.map(tool => (
              <Typography key={tool.name}>
                {tool.title}: {tool.dur}
              </Typography>
            ))}

            {hunterStore.totalMaterials?.map(material => (
              <Typography key={material.name}>
                {material.title}: {material.count}
              </Typography>
            ))}

          </AccordionDetails>
        </Accordion>

        {/* <Button onClick={handleShow}>Show</Button> */}

      </Box >
    </Box >
  );
}

export default observer(App);
