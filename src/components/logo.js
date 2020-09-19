import React from "react"
import styles from "../styles/index.module.css"
import { Link } from "gatsby"
import "../index.css"
import { Grid, useTheme, useMediaQuery } from "@material-ui/core"

export default function Logo() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("md"))
  const matchesXS = useMediaQuery("(max-width:370px)")
  return (
    <Link to="/" className={styles.wordMarkLink}>
      <Grid
        container
        spacing={matches ? 4 : 1}
        alignItems="center"
        justify={!matchesXS ? "flex-start" : "center"}
        direction={!matchesXS ? "row" : "column"}
      >
        <Grid item>
          <span
            className={
              matches ? styles.wordMarkTitle : styles.wordMarkTitleMobile
            }
            noWrap
          >
            PHILIPP SCHULZ
          </span>
        </Grid>
        <Grid item>
          <span
            className={
              matches ? styles.wordMarkSubtitle : styles.wordMarkSubtitleMobile
            }
            noWrap
          >
            CONSULTING
          </span>
        </Grid>
      </Grid>
    </Link>
  )
}
