import React from "react"
import styles from "../styles/index.module.css"
import { AppBar, Toolbar, IconButton, Grid } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import Logo from "../components/logo"

export default function Navbar() {
  return (
    <AppBar position="sticky" className={styles.appBar}>
      <Toolbar>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <Logo />
          </Grid>
          <Grid item>
            <Grid container justify="flex-end" alignItems="center">
              <Grid item>
                <IconButton edge="start" aria-label="menu" size="medium">
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
