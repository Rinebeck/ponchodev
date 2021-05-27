import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { isMobile } from 'react-device-detect'

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#fff',
      minHeight: '400px',
      width: isMobile ? '103.1vw' : '99.8vw',
    },
    title: {
        color: '#454360',
        margin: isMobile ? '25px 0 0 35px' : '25px 0 0 150px',
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
        }
    }
}));

export default function About() {
    const classes = useStyles();

    return (
    <div id="about">
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={8}>
                <h1 className={classes.title}>About me</h1>
                <p>Work in progress!</p>
            </Grid>
        </Grid>
    </div>
    )
}