import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Avatar from "@material-ui/core/Avatar"
import Box from "@material-ui/core/Box"
import ReactTypingEffect from "react-typing-effect"
import { SocialIcon } from "react-social-icons"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NightSky from "components/NightSky"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#353353",
    height: "103vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  large: {
    width: theme.spacing(17),
    height: theme.spacing(17),
  },
  centerCol: {
    flexBasis: "unset",
    color: "#fff",
  },
  profession: {
    fontSize: "1.5em",
  },
  nickname: {
    fontFamily: "Monaco",
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#ff4c60",
    color: "#fff",
    borderRadius: "10px",
    fontWeight: "bold",
    "&:hover": {
      background: "#fff",
      color: "#ff4c60",
    },
  },
  scrollDown: {
    position: "absolute",
    bottom: "-12px",
  },
  rounded: {
    borderRadius: '50%',
  },
}));

export default function Home() {
  const handleIconClick = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const classes = useStyles();
  const words = [
    "Software Engineer",
    "Full-Stack Developer",
    "Backend Engineer",
    "Frontend Developer",
    "Web Developer",
  ];

  return (
    <Grid container id="home" className={classes.root}>
      <NightSky></NightSky>
      <Grid item xs={12} className={classes.centerCol}>
        <Box boxShadow={7} className={classes.rounded}>
          <Avatar
            alt="poncho"
            src="/img/avatar.jpg"
            className={classes.large}
          />
        </Box>
      </Grid>
      <Grid item xs={12} className={classes.centerCol}>
        <h1>
          Alfonso <span className={classes.nickname}>-Poncho-</span> Pedroza
        </h1>
      </Grid>

      <Grid
        item
        xs={12}
        className={classes.centerCol + " " + classes.profession}
      >
        <ReactTypingEffect
          staticText={"I'm a"}
          typingDelay={300}
          text={words}
          eraseSpeed={50}
          eraseDelay={1500}
          speed={150}
        />
      </Grid>

      <Grid item xs={12} className={classes.centerCol}>
        <SocialIcon
          url="https://github.com/Rinebeck"
          bgColor={"transparent"}
          fgColor={"#fff"}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/rinebeck/"
          bgColor={"transparent"}
          fgColor={"#fff"}
        />
        <SocialIcon
          url="https://codepen.io/rinebeck/"
          bgColor={"transparent"}
          fgColor={"#fff"}
        />
        <SocialIcon
          url="https://twitter.com/rinebeck"
          bgColor={"transparent"}
          fgColor={"#fff"}
        />
        <SocialIcon
          url="https://facebook.com/Rinebeck"
          bgColor={"transparent"}
          fgColor={"#fff"}
        />
      </Grid>

      <Grid item xs={12} className={classes.centerCol}>
        <Button
          variant="contained"
          size="large"
          className={classes.button}
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Hire me!
        </Button>
      </Grid>

      <Grid
        item
        xs={12}
        onClick={handleIconClick}
        className={
          classes.centerCol + " " + classes.scrollDown + " bounce-icon"
        }
      >
        <p>Scroll down</p>
        <FontAwesomeIcon icon={["fas", "angle-down"]} color="white" size="3x" />
      </Grid>
    </Grid>
  );
}
