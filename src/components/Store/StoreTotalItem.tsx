import React from 'react'
import { observer } from 'mobx-react-lite';
import Typography from "@mui/material/Typography";
import { IBaseItem, ITotal } from '../../interfaces'

type PropType = {
  item: IBaseItem
}

const StoreTotalItem = ({ item }: PropType) => {
  const { title, count } = item
  // const resourse = item.resourse ? '(' + item.resourse + ')' : ''
  const color = count < 0 ? "red" : "green"

  return (
    <Typography
      color={color}
    >
      {title}: {count}
      {/* {resourse} */}
    </Typography>
  )
}

export default observer(StoreTotalItem)
