import React from 'react'
import { Grid } from './styled'

export default ({ children, col, row }) => {
  return (
    <Grid col={col} row={row}>
      {children}
    </Grid>
  )
}
