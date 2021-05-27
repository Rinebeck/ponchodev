import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlineOutlined';
import BusinessIcon from '@material-ui/icons/BusinessCenterOutlined';
import BallotIcon from '@material-ui/icons/BallotOutlined';
import AppsIcon from '@material-ui/icons/AppsOutlined';
import ForumIcon from '@material-ui/icons/ForumOutlined';
import CloseIcon from '@material-ui/icons/Close';
import ThanksIcon from '@material-ui/icons/SentimentVerySatisfiedOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Avatar from '@material-ui/core/Avatar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
  }
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const links = [
    {
      'icon': <HomeIcon style={{ color: '#fff' }}/>,
      'text': 'Home',
      'link': '',
    },
    {
      'icon': <PersonIcon style={{ color: '#fff' }}/>,
      'text': 'About'
    },
    {
      'icon': <BusinessIcon style={{ color: '#fff' }}/>,
      'text': 'Services'
    },
    {
      'icon': <BallotIcon style={{ color: '#fff' }}/>,
      'text': 'Experience'
    },
    {
      'icon': <AppsIcon style={{ color: '#fff' }}/>,
      'text': 'Works'
    },
    {
      'icon': <ForumIcon style={{ color: '#fff' }}/>,
      'text': 'Contact'
    },
    {
      'icon': <ThanksIcon style={{ color: '#fff' }}/>,
      'text': 'Icons by Freepik',
      'link': 'https://www.freepik.com',
    },
    {
      'icon': <FontAwesomeIcon icon={['fab', 'react']} color="white" size="2x" />,
      'text': 'Powered by React',
      'link': '',
    },
  ]

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
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
        <Divider />
        <List>
          {links.map((item, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}