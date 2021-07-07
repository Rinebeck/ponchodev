import ExpTimeline from "../components/ExpTimeline"
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Paper from '@material-ui/core/Paper'
import SectionTitle from "../components/SectionTitle"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    minHeight: "400px",
    width: "100vw",
    padding: "50px 0",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    height: "100%",
    position: "relative",
    transition: "bottom .3s, box-shadow .3s",
    borderRadius: "15px",
  },
}));


export default function Experience() {
    
    const classes = useStyles();

    const jobs = [
        {
            title: 'Backend Web Developer',
            text: 'Kiubix',
            link: 'https://kiubix.mx/',
            time: '2016 - 2016',
            icon: <FontAwesomeIcon icon={['fas', 'laptop-code']} color="#ff4c60" size="2x" />
        },
        {
            title: 'Full-stack Web Developer',
            text: 'Zegucom Cómputo',
            link: 'https://www.zegucom.com.mx/',
            time: '2016 - 2018',
            icon:  <FontAwesomeIcon icon={['fas', 'laptop-code']} color="#ff4c60" size="2x" />
        },
        {
            title: 'Full-stack Web Developer',
            text: 'CEOS New Media Agency',
            link: 'https://ceosnewmedia.com/',
            time: '2018 - 2020',
            icon:  <FontAwesomeIcon icon={['fas', 'laptop-code']} color="#ff4c60" size="2x" />
        },
        {
            title: 'Software Engineer',
            text: 'Wizeline',
            link: 'https://www.wizeline.com/',
            time: '2020 - Present',
            icon:  <FontAwesomeIcon icon={['fas', 'laptop-code']} color="#ff4c60" size="2x" />
        },
    ];

    const freelance = [
        {
            title: 'WordPress Site',
            text: 'Nafta Frigo',
            link: 'https://naftafrigo.mx/eng/',
            time: '2020',
            icon:  <FontAwesomeIcon icon={['fab', 'wordpress']} color="#ff4c60" size="2x" />
        },
        {
            title: 'WordPress Site',
            text: 'ClickClack',
            link: 'https://clickclack.mx/',
            time: '2020',
            icon:  <FontAwesomeIcon icon={['fab', 'wordpress-simple']} color="#ff4c60" size="2x" />
        },
        {
            title: 'PHP Yii2 Application',
            text: 'SistemaGG (unreleased)',
            link: '',
            time: '2020',
            icon:  <FontAwesomeIcon icon={['fab', 'php']} color="#ff4c60" size="2x" />
        },
        {
            title: 'React App',
            text: 'Quarella Design',
            link: 'https://quarelladesign.com/',
            time: '2021',
            icon:  <FontAwesomeIcon icon={['fab', 'react']} color="#ff4c60" size="2x" />
        },
    ];

    return (
      <div id="experience" className={classes.root}>
        <SectionTitle title="Experience"></SectionTitle>
        <Grid container spacing={3}>
          <Grid item md />
          <Grid item md={4} xs={12} className="card-container">
            <Paper className={classes.paper} elevation={4}>
              <ExpTimeline type="Job Positions" items={jobs} />
            </Paper>
          </Grid>
          <Grid item md={4} xs={12} className="card-container">
            <Paper className={classes.paper} elevation={4}>
              <ExpTimeline type="Freelance Projects" items={freelance} />
            </Paper>
          </Grid>
          <Grid item md />
        </Grid>
      </div>
    );

}