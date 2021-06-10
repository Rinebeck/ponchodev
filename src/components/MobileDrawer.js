import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 250,
  },
  titleBar: {
      marginLeft: '15px',
  },
  appBar: {
    zIndex: 10,
    backgroundColor: '#353353'
  },
  paper: {
    background: "#353353"
  }
}));

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function MobileDrawer(props) {
  const classes = useStyles();

  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if(event){
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    }
    setState(open);
  };

  const handleClick = (target) => {
    if(target.includes('https')){
      window.open(target);
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    }
    toggleDrawer(false);
  };

  const links = [
    {
      'icon': <FontAwesomeIcon icon={['fas', 'home']} color="white" size="lg" />,
      'text': 'Home',
      'target': 'home',
    },
    {
      'icon': <FontAwesomeIcon icon={['fas', 'user']} color="white" size="lg" />,
      'text': 'About',
      'target': 'about',
    },
    {
      'icon': <FontAwesomeIcon icon={['fas', 'briefcase']} color="white" size="lg" />,
      'text': 'Services',
      'target': 'services',
    },
    {
      'icon': <FontAwesomeIcon icon={['fas', 'graduation-cap']} color="white" size="lg" />,
      'text': 'Experience',
      'target': 'experience',
    },
    {
      'icon': <FontAwesomeIcon icon={['fas', 'layer-group']} color="white" size="lg" />,
      'text': 'Works',
      'target': 'works',
    },
    {
      'icon': <FontAwesomeIcon icon={['fas', 'comments']} color="white" size="lg" />,
      'text': 'Contact',
      'target': 'contact',
    },
    {
      'icon': <FontAwesomeIcon icon={['fas', 'icons']} color="white" size="lg" />,
      'text': 'Icons by Freepik',
      'target': 'https://www.freepik.com',
    },
    {
      'icon': <FontAwesomeIcon icon={['fab', 'react']} color="white" size="lg" />,
      'text': 'Powered by React',
      'target': 'https://reactjs.org/',
    },
  ]

  return (
    <div className={classes.root}>
      <ElevationScroll {...props}>
        <AppBar position={'fixed'} className={ classes.appBar } elevation={0}>
            <Toolbar>
                <IconButton 
                    onClick={toggleDrawer(true)}
                    edge="start" 
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                >
                        <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    <Avatar src="/logo192.png"/>
                    <span className={classes.titleBar}>poncho.dev</span>
                </Typography>
            </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Drawer open={state} onClose={toggleDrawer(false)} classes={{ paper: classes.paper }}>
        <div
            className={clsx(classes.list, {
                [classes.fullList]: true,
            })}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
          <List>
              {links.map((item, index) => (
                  <ListItem button key={index} onClick={() => {handleClick(item.target)}}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText style={ {color: '#fff'} } primary={item.text} />
                  </ListItem>
              ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}
