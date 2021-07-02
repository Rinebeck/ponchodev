import CountUp from 'react-countup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center'
    },
    count: {
        fontSize: 30,
        margin: 0,
        color: '#454360',
    },
    text: {
        color: '#454360c7',
        fontSize: 16,
        margin: 0,
        fontFamily: '"Rubik", sans-serif',
        fontWeight: 700,
        lineHeight: 1.7
    },
}));

export default function CounterUp({value, duration, icon, text}) {
    const classes = useStyles();
    return (
        <Grid container className={classes.root} spacing={4}>
            <Grid item xs={2}>
                <FontAwesomeIcon icon={['fas', icon]} color="grey" size="2x" style={ {color: '#45436059'} } />
            </Grid>
            <Grid item>
                <h3 className={classes.count}>
                    <CountUp end={value} duration={duration} />
                </h3>
                <p className={classes.text}>{text}</p>
            </Grid>
        </Grid>
    )
}