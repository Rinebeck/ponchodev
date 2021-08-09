import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ServiceCard from '../components/ServiceCard'
import SectionTitle from '../components/SectionTitle'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  here: {
    color: '#ff4c60',
    cursor: 'pointer',
    transition: 'color .3s',
    '&:hover': {
      'color': '#353353',
    },
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  const handleHereClick = () => {
    window.open(
      "mailto:ponchopdev@gmail.com?subject=Dev Question&body=Hi Poncho! I'd like to know if you can help me with..."
    );
  };

  return (
    <div id="services" className={classes.root}>
      <SectionTitle title="Services" />
      <Grid container spacing={4}>
        <Grid item md />
        <Grid item xs={12} md={3} className="card-container">
          <ServiceCard
            background="#6c6ce5"
            color="#f8f9fa"
            title="Web Development"
            text="Entire sites, single pages, e-commerce platforms, ERP systems, you name it! 
                  Any platform you can think of, it's possible.
                  Sky is the limit! (time and money are also limits, but they're way less poetic!)."
            img="/img/assets/web_development.png"
          />
        </Grid>
        <Grid item xs={12} md={3} className="card-container">
          <ServiceCard
            background="#f9d74c"
            color="#5e5c7f"
            title="Wordpress Customizations"
            text="Have a Wordpress site but it doesn't work exactly as you'd like to?
                  Maybe is just a little thing or maybe you want it rebuilt, doesn't matter, 
                  I can do it."
            img="/img/assets/wordpress.png"
          />
        </Grid>
        <Grid item xs={12} md={3} className="card-container">
          <ServiceCard
            background="#f97b8b"
            color="#f8f9fa"
            title="Mobile Apps"
            text="That's right, get on the Play Store and AppStore, your users are waiting for it!
                  Don't miss the chance, all the other platforms have an app why yours don’t?"
            img="/img/assets/mobile_dev.png"
          />
        </Grid>
        <Grid item md />
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="body1" style={{ padding: 50 }}>
            Not exactly what you were looking for?{" "}
            <span className={classes.here} onClick={handleHereClick}>
              Click here
            </span>{" "}
            so I can see how I can help! 👋
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
