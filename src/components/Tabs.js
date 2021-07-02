import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Box from "@material-ui/core/Box"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'transparent',
  },
}));

function TabPanel(props) {
  const { content, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{content}</Box>}
    </div>
  );
}

export default function TabsComponent({ sections, ...other }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root} elevation={0}>
      <Tabs value={value} onChange={handleChange} {...other}>
        {sections.map((section, i) => {
          return (
            <Tab
              aria-label={section.title}
              label={section.title}
              icon={section.icon}
              key={i}
            />
          );
        })}
      </Tabs>
      {sections.map((section, i) => {
        return (
          <TabPanel value={value} index={i} key={i} content={section.content} />
        );
      })}
    </Paper>
  );
}
