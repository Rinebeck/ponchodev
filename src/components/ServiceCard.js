import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Fade from "react-reveal/Fade"

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height: '100%',
    position: 'relative',
    transition: 'bottom .3s, box-shadow .3s',
    borderRadius: '15px',
  },
  fullHeight: {
    height: '100%',
  },
  lightFont: {
    color: '#f8f9fa',
  },
  darkFont: {
    color: '#5e5c7f'
  },
  img: {
    maxWidth: '45%',
    padding: theme.spacing(3),
  },
  title: {
    fontWeight: 'bold',
    padding: theme.spacing(2),
  },
  text:{
    padding: theme.spacing(3),
  },
}));

export default function ServiceCard({background, color, title, text, img}) {
  const classes = useStyles();

  let [depth, setDepth] = React.useState(3);
  let [bottom, setBottom] = React.useState(0);

  const elevate = () => {
    setDepth(15);
    setBottom(15);
  }

  const ground = () => {
    setDepth(3);
    setBottom(0);
}

  return (
    <Fade clear style={{height: '100%'}}>
      <Paper
        className={classes.paper}
        style={{ background: background, bottom: bottom }}
        elevation={depth}
        onMouseOver={elevate}
        onMouseOut={ground}
      >
        <img className={classes.img} src={img} alt={title} />
        <Typography
          variant="h5"
          className={classes.title}
          style={{ color: color }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          className={classes.text}
          style={{ color: color }}
        >
          {text}
        </Typography>
      </Paper>
    </Fade>
  );}
