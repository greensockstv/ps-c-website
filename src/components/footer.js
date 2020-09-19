import React from "react"
import styles from "../styles/index.module.css"
import { Link } from "gatsby"
import Logo from "./logo"
import {
  IconButton,
  Grid,
  Button,
  useTheme,
  useMediaQuery,
} from "@material-ui/core"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
export default function Footer() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("md"))
  return (
    <>
      <footer className={styles.footer}>
        <Grid
          container
          justify={matches ? "space-between" : "center"}
          alignItems="center"
          direction={matches ? "row" : "column"}
        >
          <Grid item>
            <Logo />
          </Grid>
          <Grid item>
            <Link to="/imprint">
              <Button>Impressum</Button>
            </Link>
            <Link to="/datenschutz">
              <Button>Datenschutz</Button>
            </Link>

            <Button>Kontakt</Button>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </Grid>
        </Grid>
      </footer>
      <div className={styles.credit}>
        <Grid container justify="center" alignItems="center">
          <Grid item>
            <a href="http://romantika5.com" target="_blank">
              <Button
                disableRipple
                size="small"
                variant="text"
                className={styles.creditBtn}
              >
                made by GreenSocks
              </Button>
            </a>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
