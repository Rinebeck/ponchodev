import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { isMobile } from 'react-device-detect'
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ProgressBar from '../components/ProgressBar'
import Button from '@material-ui/core/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CounterUp from '../components/CounterUp';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#fff',
      minHeight: '400px',
      width: isMobile ? '103.1vw' : '99.8vw',
      padding: '50px 0',
    },
    title: {
        color: '#454360',
        position: 'relative',
        fontSize: '36px',
        textAlign: 'left',
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
        },
        '&::before': {
            content: "''",
            backgroundImage: 'url(/img/dots-bg.svg)',
            display: 'block',
            height: '37px',
            left: '-14px',
            top: '-14px',
            position: 'absolute',
            width: '37px',
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(1),
        boxShadow: '0 5px 20px 0 rgb(69 67 96 / 10%)',
        borderRadius: '15px',
    },
    button: {
        margin: theme.spacing(5),
        backgroundColor: '#ff4c60',
        color: '#fff',
        borderRadius: '10px',
        fontWeight: 'bold',
        '&:hover': {
          background: "#fff",
          color: '#ff4c60',
       },
    },
    large: {
        width: theme.spacing(14),
        height: theme.spacing(14),
        margin: 'auto',
    },
    counters: {
        padding: isMobile ? theme.spacing(0, 8) : theme.spacing(8, 0),
    },
}));

export default function About() {
    const classes = useStyles();

    return (
    <div id="about" className={classes.root}>
        <Grid container spacing={3}>
            <Grid item md />
            <Grid item md={10} xs={12}>
                <h1 className={classes.title}>About me</h1>
            </Grid>
        </Grid>

        <Grid container spacing={3}>
            <Grid item md />
            <Grid item md={3} xs={12}>
                <Avatar alt="poncho" src="/img/avatar.jpg" className={classes.large} />
                <Button
                    variant="contained"
                    size="large"
                    className={classes.button}>
                    <FontAwesomeIcon icon={['fas', 'download']} color="white" size="1x" style={ {marginRight: '10px'} } />
                    Download CV
                </Button>
            </Grid>
            <Grid item md={7} xs={12}>
                <Paper className={classes.paper}>
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                            <Typography variant="body1" gutterBottom>
                                My name is Alfonso Pedroza, but everybody calls me Poncho. 
                                I am a web developer from Mexico. 
                                I have a lot of experience in website building using many different technologies, including but not limited to PHP (Yii, Laravel, Symphony),
                                JavaScript (React, jQuery, Vanilla), also I can create custom WordPress plugins for all your needs, 
                                as well as improve your existing website by adding cool new features, fixing bugs or maybe just speeding them up.
                            </Typography>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <ProgressBar title={"PHP"} value={95} color={'#797cb4'}/>
                            <ProgressBar title={"JavaScript"} value={80} color={'#efd819'}/>
                            <ProgressBar title={"MySQL"} value={85} color={'#ff4c60'}/>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item md />
        </Grid>

        <Grid container spacing={2} className={classes.counters}>
            <Grid item md />
            <Grid item xs={12} sm={6} md={2}>
                <CounterUp value={31} duration={6} icon={'fire-alt'} text={"Projects completed"} />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
                <CounterUp value={5475} duration={4.5} icon={'mug-hot'} text={"Cups of coffee"} />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
                <CounterUp value={70189} duration={4} icon={'laptop-code'} text={"Lines of code"} />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
                <CounterUp value={537} duration={4.8} icon={'bug'} text={"Bugs fixed"} />
            </Grid>
            <Grid item md />
        </Grid>
    </div>
    )
}