import React from 'react'
import { observer } from 'mobx-react-lite';
import Typography from "@mui/material/Typography";
import { IBaseItem, IResourses, ITotal } from '../../interfaces'
import Box from '@mui/material/Box';

type PropType = {
  resourses: IResourses
}

const StoreTotalItem = ({ resourses }: PropType) => {
  const { food, water, wood } = resourses

  // const color = count < 0 ? "red" : "green"

  return (
    <Box>
      Food: {food} Water: {water} Wood: {wood}
    </Box>
  )
}

export default observer(StoreTotalItem)
