import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { LinearProgress, Typography } from '@material-ui/core'
class ProgressBar extends Component {
  render() {
    const { classes } = this.props;
    return (
    <div className={classes.root}>
      <Typography>{this.props.title}</Typography>
      <LinearProgress 
          value={this.props.value} 
          variant="determinate" 
          classes={{
              root: classes.barRoot,
              colorPrimary: classes.colorPrimary, 
              barColorPrimary: classes.barColorPrimary,
              bar: classes.bar,
            }}
      />
    </div>
    );
  }
}

const styles = ({
  root: {
    padding: '15px'
  },
  barRoot: {
    height: 10,
    borderRadius: 5,
  },
  bar: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: '#eee',
  },
  barColorPrimary: {
    backgroundColor: props => props.color,
  }
});

export default withStyles(styles)(ProgressBar);