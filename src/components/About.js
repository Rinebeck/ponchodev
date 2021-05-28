import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { isMobile } from 'react-device-detect'
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ProgressBar from './ProgressBar'

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#fff',
      minHeight: '400px',
      width: isMobile ? '103.1vw' : '99.8vw',
    },
    title: {
        color: '#454360',
        position: 'relative',
        fontSize: '36px',
        textAlign: 'left',
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
    large: {
        width: theme.spacing(14),
        height: theme.spacing(14),
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
            <Grid item md={2} sm={12}>
                <Avatar alt="poncho" src="/img/avatar.jpg" className={classes.large} />
            </Grid>
            <Grid item md={6} sm={12}>
                <Paper className={classes.paper}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Typography variant="body1" gutterBottom>
                                My name is Alfonso Pedroza, but everybody calls me Poncho. 
                                I am a web developer from Mexico. 
                                I have a lot of experience in website building using many different technologies, including but not limited to PHP (Yii, Laravel, Symphony),
                                JavaScript (React, jQuery, Vanilla), also I can create custom WordPress plugins for all your needs, 
                                as well as improve your existing website by adding cool new features, fixing bugs or maybe just speeding them up.
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <ProgressBar title={"PHP"} value={95} color={'#797cb4'}/>
                            <ProgressBar title={"JavaScript"} value={80} color={'#efd819'}/>
                            <ProgressBar title={"MySQL"} value={85} color={'#026b8e'}/>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item md />
        </Grid>
    </div>
    )
}