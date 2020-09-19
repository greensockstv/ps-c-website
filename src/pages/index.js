import React from "react"
import styles from "../styles/index.module.css"
import { Helmet } from "react-helmet"
import Bar from "../components/bar.js"
import "../index.css"
import {
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
export default function Home() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("md"))
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Philipp Schulz consulting</title>
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div>
        <AppBar position="sticky" className={styles.appBar}>
          <Toolbar>
            <Grid container alignItems="center" justify="space-between">
              <Grid item xs={12} md={6}>
                <a href="/">
                  <div className={styles.logoContainer}>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/ps-c-website.appspot.com/o/schriftzugPSk2.jpg?alt=media&token=6e4207c0-6552-495f-aa20-1776ab4e6328"
                      className={styles.logo}
                      alt="logo"
                    />
                  </div>
                </a>
              </Grid>
              <Grid item xs={12} md={1}>
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
        <section className={styles.section1}>
          <div className={styles.section1container}>
            <Typography
              variant="h1"
              className={!matches ? styles.titlesMobile : styles.titles}
              gutterBottom
              display="block"
            >
              High Level Experience
            </Typography>
            <Grid container justify="flex-end">
              <Grid item>
                <Typography
                  variant="body1"
                  className={
                    matches
                      ? `${styles.textsHeading}`
                      : `${styles.textsHeadingMobile}`
                  }
                >
                  „Unternehmen sind lebendige Strukturen die man respektvoll an
                  die Umgebung anpassen muss. Analytisches Denken und
                  intelligentes Management auf höchstem Niveau bilden die Basis
                  für die Unterstützug erfahrener, aber auch junger Unternehmen
                  auf ihrem Weg des Wachstums und der Veränderung.“
                </Typography>
                <Grid
                  container
                  alignItems="center"
                  justify={matches ? "flex-start" : "center"}
                >
                  <Grid item>
                    <IconButton size="large" href="#middle">
                      <svg className={styles.down}>
                        <path
                          fill="#fff"
                          d="M23.1,34.1L51.5 61.7 80 34.1 81.5 35 51.5 64.1 21.5 35 23.1 34.1 z"
                        ></path>
                      </svg>
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </section>
        <section id="middle">
          <div className={styles.profile}>
            <Grid
              container
              alignItems="center"
              justify="space-between"
              spacing={9}
            >
              <Grid item xs={12} md={6}>
                <div className={styles.portraitContainer}>
                  <img
                    src="https://lh3.googleusercontent.com/EDTjpQan5NUSn0VbT6pLpUJX2G0MxAgaZpNDyNqZtlLVMRQL-V9Z4Y7l1iPLV3SSkz53=s151"
                    className={styles.portrait}
                    alt="portrait"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  className={styles.texts2gold}
                  variant="body2"
                  gutterBottom
                >
                  PHILIPP SCHULZ ÜBER DIE HERAUSFORDERUNGEN VON DIGITALER
                  DISRUPTION UND INNOVATIVEM POTENZIAL
                </Typography>
                <Button
                  size="large"
                  className={styles.goldButton}
                  disableElevation
                >
                  Weiter Lesen
                </Button>
              </Grid>
            </Grid>
          </div>
        </section>
        <section className={styles.efficiencySection}>
          <div className={styles.efficiencySectionContainer}>
            <Typography
              variant="h1"
              component="h2"
              className={!matches ? styles.titlesMobile : styles.titles}
              gutterBottom={true}
            >
              EFFIZIENZ UND EXZELLENZ
            </Typography>
            <Typography
              className={
                matches ? styles.texts2subtitles : styles.texts2subtitlesMobile
              }
              variant="h5"
            >
              DAS LEISTUNGSSPEKTRUM
            </Typography>
          </div>
          <Bar
            title="BERATUNG"
            text="Betriebliche Herausforderungen erfordern oftmals externe
Unterstützung. Zählen Sie auf Erfahrung aus über 20 Jahren
operativer Beratertätigkeit mit Schwerpunkt Internationalisierung, Start-up und Change Management."
          />
          <Bar
            title="INTERIM MANAGEMENT"
            text="Kurzfristige Aufgabenstellungen, inklusive Geschäftsführung,
zur Verstärkung oder als Ersatz Ihrer internen Ressourcen.
"
          />
          <Bar
            title="QUANTENSPRUNG"
            text="Einzelcoaching, das uns eingelernte Muster überkommen und
effizientere Strukturen einsetzen lässt, kann einen wahren
Quantensprung für Ihren Erfolg bedeuten. Als Vorbereitung
auf neue Aufgaben und Handlungsfelder."
          />
        </section>
        <section className={styles.contactSection}>
          <div className={styles.contactSectionContainer}>
            <Typography
              variant="h3"
              gutterBottom
              className={!matches ? styles.titlesMobile : styles.titles}
            >
              HIGH LEVEL CONSULTING
            </Typography>
            <Grid container justify={"flex-end"}>
              <Grid item>
                <Typography
                  variant="body1"
                  className={
                    matches ? styles.textsRight : styles.textsRightMobile
                  }
                  gutterBottom
                >
                  Höchste Zeit für eine punktgenaue Analyse und zielgerichtetes
                  Handeln zur Optimierung Ihrer Unternehmens Performance ...
                </Typography>
                <Grid
                  container
                  justify={matches ? "flex-start" : "center"}
                  alignItems="center"
                >
                  <Grid item>
                    <Button size="large" className={styles.goldButton}>
                      KONTAKTIEREN SIE UNS
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </section>
        <footer className={styles.footer}>
          <Grid
            container
            justify={matches ? "space-between" : "center"}
            alignItems="center"
            direction={matches ? "row" : "column"}
          >
            <Grid item>
              <a href="/">
                <div className={styles.logoContainer}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/ps-c-website.appspot.com/o/schriftzugPSk2.jpg?alt=media&token=6e4207c0-6552-495f-aa20-1776ab4e6328"
                    className={styles.logo}
                    alt="logo"
                  />
                </div>
              </a>
            </Grid>
            <Grid item>
              <Button>Impressum</Button>
              <Button>Datenschutz</Button>
              <Button>Kontakt</Button>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </Grid>
          </Grid>
        </footer>
      </div>
    </>
  )
}
