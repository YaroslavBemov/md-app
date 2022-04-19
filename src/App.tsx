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

import { book as b } from './data/book'
import { hunter } from './data/mining'
import Button from '@mui/material/Button';

interface IData {
  [key: string]: number
}

const defaultState = {} as IData
hunter.forEach(item => {
  Object.assign(defaultState, { [item.name]: 0 })
})
console.log(defaultState);

function App() {
  const [data, setData] = useState(defaultState)

  const handleAdd = () => {

  }
  const handleRemove = () => {

  }

  const handleShow = () => {
    console.log(data);

  }

  const handleChange = (event: any) => {
    let { name, value } = event.target
    value = value < 0 ? 0 : value
    setData(prev => ({
      ...prev,
      [name]: +value
    }))
  }

  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Hunter</Typography>
        </AccordionSummary>

        {hunter.map(item => (
          <AccordionDetails>
            <Paper sx={{
              display: 'flex',
              alignItems: 'center',
              p: 2,
            }}>
              {item.title}
              <IconButton onClick={handleAdd}>
                <AddIcon />
              </IconButton>
              <IconButton onClick={handleRemove}>
                <RemoveIcon />
              </IconButton>
              <TextField
                type='number'
                name={item.name}
                value={data[item.name]}
                onChange={handleChange}
              >
                {data[item.name]}
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
          <Typography>
            Knife
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Button onClick={handleShow}>Show</Button>

    </Box>
  );
}

export default App;
