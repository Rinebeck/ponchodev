import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { SocialIcon } from "react-social-icons"
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles(() => ({
  footer: {
    display: "flex",
    width: "100%",
    minHeight: "100px",
    background: "#f9d74b",
    color: "#1d769b",
    alignItems: 'center',
    justifyContent: 'space-around',
    fontWeight: 700,
    fontSize: '1.2em',
  },
}));

export default function Footer() {
    const classes = useStyles();
    return (
      <div className={classes.footer}>
        <Hidden smDown>
          <div>Thanks for coming!</div>
        </Hidden>
        <div>
          {" "}
          <SocialIcon
            url="https://github.com/Rinebeck"
            bgColor={"transparent"}
            fgColor={"#1d769b"}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/rinebeck/"
            bgColor={"transparent"}
            fgColor={"#1d769b"}
          />
          <SocialIcon
            url="https://codepen.io/rinebeck/"
            bgColor={"transparent"}
            fgColor={"#1d769b"}
          />
          <SocialIcon
            url="https://twitter.com/rinebeck"
            bgColor={"transparent"}
            fgColor={"#1d769b"}
          />
          <SocialIcon
            url="https://facebook.com/Rinebeck"
            bgColor={"transparent"}
            fgColor={"#1d769b"}
          />
        </div>
        <Hidden smDown>
          <div>{new Date().getFullYear()}</div>
        </Hidden>
      </div>
    ); 
}