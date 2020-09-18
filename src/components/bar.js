import React from "react"
import { Grid, Divider, Typography } from "@material-ui/core"
export default function Bar(props) {
  return (
    <div>
      <Divider variant="middle" />
      <Grid container>
        <Grid item>
          <Typography>{props.title}</Typography>
        </Grid>
        <Grid item>
          <Typography>{props.text}</Typography>
        </Grid>
      </Grid>
    </div>
  )
}
