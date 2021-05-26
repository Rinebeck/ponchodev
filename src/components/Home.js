import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import ReactTypingEffect from 'react-typing-effect';
import { SocialIcon } from 'react-social-icons';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#353353',
    height: '101.2vh',
    width: '100.65%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  centerCol: {
    flexBasis: 'unset',
    color: '#fff',
  },
  profession: {
    fontSize: '1.5em'
  },
  nickname: {
    fontFamily: 'Monaco'
  },
}));

export default function Home() {
  const classes = useStyles();
  const words = ["Software Engineer", "Full-Stack Developer", "Backend Engineer", "Frontend Developer", "Web Developer"];

  return (

    <Grid container spacing={3} className={classes.root}>

      <Grid item xs={12} className={classes.centerCol}>
        <Avatar alt="poncho" src="/img/avatar.jpg" className={classes.large} />
      </Grid>
      <Grid item xs={12} className={classes.centerCol}>
        <h1>Alfonso <span className={classes.nickname}>-Poncho-</span> Pedroza</h1>
      </Grid>

      <Grid item xs={12} className={[classes.centerCol, classes.profession]}>
        <p>
          <ReactTypingEffect 
            staticText={"I'm a"}
            typingDelay={500}
            text={words}
            eraseSpeed={50}
            eraseDelay={1500}
            speed={150}
          />
        </p>
      </Grid>

      <Grid item xs={12} className={classes.centerCol}>
        <SocialIcon url="https://twitter.com/rinebeck" bgColor={'transparent'} fgColor={'#fff'} />
        <SocialIcon url="https://www.linkedin.com/in/rinebeck/" bgColor={'transparent'} fgColor={'#fff'} />
        <SocialIcon url="https://github.com/Rinebeck" bgColor={'transparent'} fgColor={'#fff'} />
      </Grid>
      
    </Grid>
  );
}