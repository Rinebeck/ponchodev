import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Avatar from '@material-ui/core/Avatar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: '#353353',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    borderRight: 'none',
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    },
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: '#353353',
    color: '#fff',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    background: '#353353',
    color: '#fff',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  icon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: '10px',
  },
  item: {
    marginLeft: 10,
  },
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

export default function DesktopDrawer(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (target) => {
    if(target.includes('https')){
      window.open(target);
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    }
    handleDrawerClose();
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ElevationScroll {...props}>
      <AppBar
        elevation={0}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Avatar alt="poncho" src="/logo192.png" className={classes.icon}/>
          <Typography variant="h6" noWrap>
            poncho.dev
          </Typography>
        </Toolbar>
      </AppBar>
      </ElevationScroll>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon style={{ color: '#fff' }}/>
          </IconButton>
        </div>
        <List>
            {links.map((item, index) => (
              <ListItem className={classes.item+' '+item.target} button key={index} onClick={() => {handleClick(item.target)}}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
        </List>
      </Drawer>
    </div>
  );
}