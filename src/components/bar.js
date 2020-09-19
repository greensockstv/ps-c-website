import React from "react"
import { Grid, Divider, Typography } from "@material-ui/core"
import styles from "../styles/bar.module.css"
export default function Bar(props) {
  return (
    <div>
      <Divider variant="middle" className={styles.divider} />
      <div className={styles.container}>
        <Grid
          container
          alignItems="flex-start"
          justify="space-between"
          spacing={9}
        >
          <Grid item xs={12} md={6}>
            <Typography
              className={styles.subtitle}
              gutterBottom={false}
              paragraph={false}
            >
              {props.title}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              className={styles.text}
              variant="body1"
              gutterBottom={false}
              paragraph={false}
            >
              {props.text}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
