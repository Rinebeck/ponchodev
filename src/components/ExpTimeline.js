import React from 'react'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  item: {
    '&::before': {
      content: "unset",
    },
  },
  content: {
    '& p' : {
      textAlign: 'left'
    }
  },
  connector: {
    backgroundColor: '#ff4c60',
  },
  link: {
    cursor: 'pointer',
  },
}))

export default function BasicTimeline({type, items}) {
  
  const classes = useStyles();

  const lenght = items.length;

  const handleClick = (link) => {
    if(link) {
      window.open(link);
    }
  }

  return (
    <Timeline>
      <Typography variant="h5">{type}</Typography>
      {items.map((item, i) => (
        <TimelineItem className={classes.item} key={i}>
          <TimelineSeparator>
            {item.icon}
            {i + 1 < lenght ? (
              <TimelineConnector className={classes.connector} />
            ) : (
              ""
            )}
          </TimelineSeparator>
          <TimelineContent className={classes.content}>
            <Typography>{item.title}</Typography>
            <Typography
              color="textSecondary"
              className={classes.link}
              onClick={() => {
                handleClick(item.link);
              }}
            >
              {item.text}
            </Typography>
            <Typography color="textSecondary">{item.time}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}