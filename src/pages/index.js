import React from "react"
import styles from "../styles/Index.module.css"
import { AppBar, Toolbar, IconButton, Grid } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
export default function Home() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <div>
                <img src="static/schriftzugPSk2.jpg" className={styles.logo} />
              </div>
            </Grid>
            <Grid item>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}
