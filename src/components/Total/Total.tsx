import React from "react";
import { observer } from "mobx-react-lite";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { IBaseItem, ITotal } from "../../interfaces";
import TotalItem from "./TotalItem";
import TotalResourses from "./TotalResourses";

type PropType = {
  total: ITotal;
};

const Total = ({ total }: PropType) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography sx={{ ml: 'auto', mr: 'auto' }}>Total</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <TotalResourses resourses={total.resoursesTotal} />
        {total.itemsTotal
          .sort((a, b) => (a.count > b.count ? -1 : 1))
          .map((item) => <TotalItem key={item.name} item={item} />)}
      </AccordionDetails>
    </Accordion>
  );
};

export default observer(Total);
