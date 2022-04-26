import React from 'react'
import Typography from "@mui/material/Typography";
import { ITotal } from '../../interfaces'

type PropType = {
  item: ITotal
}

const TotalItem = ({ item }: PropType) => {
  const { title, count } = item
  const resourse = item.resourse ? '(' + item.resourse + ')' : ''
  const color = count < 0 ? "red" : "green"

  return (
    <Typography
      color={color}
    >
      {title}: {count} {resourse}
    </Typography>
  )
}

export default TotalItem
