import React from "react"
import { observer } from "mobx-react-lite"

import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';

import { useStore } from "../hooks/useStore";

const Hunter = () => {
  const { hunterStore } = useStore()

  const handleChange = (event: any) => {
    let { name, value } = event.target
    hunterStore.changeCount(name, Number(value))
  }

  return (
    <>
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

          {hunterStore.total
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
    </>
  )
}

export default observer(Hunter)
