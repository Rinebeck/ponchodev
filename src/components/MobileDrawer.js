import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
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
import HomeIcon from '@material-ui/icons/HomeOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlineOutlined';
import BusinessIcon from '@material-ui/icons/BusinessCenterOutlined';
import BallotIcon from '@material-ui/icons/BallotOutlined';
import AppsIcon from '@material-ui/icons/AppsOutlined';
import ForumIcon from '@material-ui/icons/ForumOutlined';
import ThanksIcon from '@material-ui/icons/SentimentVerySatisfiedOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

export default function MobileDrawer() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if(event){
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    }
    
    setState({ ...state, [anchor]: open });
  };

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
      'icon': <FontAwesomeIcon icon={['fab', 'react']} color="white" style={{ fontSize: '1.5em' }} />,
      'text': 'Powered by React',
      'link': '',
    },
  ]

  return (
    <div className={classes.root}>
        <AppBar position={'fixed'} className={ classes.appBar }>
            <Toolbar>
                <IconButton 
                    onClick={toggleDrawer('left', true)}
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
        
        <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)} classes={{ paper: classes.paper }}>
            <div
                className={clsx(classes.list, {
                    [classes.fullList]: true,
                })}
                role="presentation"
                onClick={toggleDrawer('left', false)}
                onKeyDown={toggleDrawer('left', false)}
            >
                <List>
                    {links.map((item, index) => (
                        <ListItem button key={index}>
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
