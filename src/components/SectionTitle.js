import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "400px",
  },
  title: {
    color: "#454360",
    position: "relative",
    fontSize: "36px",
    textAlign: "left",
    marginTop: 50,
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
    "&::before": {
      content: "''",
      backgroundImage: "url(/img/dots-bg.svg)",
      display: "block",
      height: "37px",
      left: "-14px",
      top: "-14px",
      position: "absolute",
      width: "37px",
    },
  },
}));

export default function SectionTitle({ title }) {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item md />
      <Grid item md={10} xs={12}>
        <Fade bottom>
          <h1 className={classes.title}>{title}</h1>
        </Fade>
      </Grid>
    </Grid>
  );
}
