import React from "react";
import { observer } from "mobx-react-lite";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { IBaseItem } from "../interfaces";

type PropType = {
  total: IBaseItem[];
};

const Total = ({ total }: PropType) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>Total</Typography>
      </AccordionSummary>

      <AccordionDetails>
        {total
          .sort((a, b) => (a.count > b.count ? -1 : 1))
          .map((item) => (
            <Typography
              key={item.name}
              color={item.count < 0 ? "red" : "green"}
            >
              {item.title}: {item.count}
            </Typography>
          ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default observer(Total);
