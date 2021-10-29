import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TabsComponent from "components/Tabs";
import SectionTitle from "components/SectionTitle";
import { wordpressWorks } from "sections/Works/Wordpress";
import { reactWorks } from "sections/Works/React";
import { phpWorks } from "sections/Works/Php";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "400px",
  },
}));

export default function Works() {
  const classes = useStyles();

  return (
    <div id="works" className={classes.root}>
      <SectionTitle title="Some of my Works" />
      <Grid container spacing={3}>
        <Grid item md />
        <Grid item xs={12} md={11}>
          <TabsComponent
            sections={[reactWorks, wordpressWorks, phpWorks]}
            centered
            variant="standard"
            indicatorColor="secondary"
            textColor="secondary"
          />
        </Grid>
      </Grid>
    </div>
  );
}
