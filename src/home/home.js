import React from 'react';
import './home.css';
import * as $ from 'jquery'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import CommentIcon from '@material-ui/icons/Comment';
import FavoriteBorderIcon from '@material-ui/icons/Favorite';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 32,
  },
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { fullScreen } = props;
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
    <div className={classes.toolbar} />
    <span className="logo">Twitter</span>
    <Divider />
    <List>
    {['Home', 'SignUp' ,'Add Tweet'].map((text, index) => (
      <ListItem button key={text}>
      <ListItemText primary={text} />
      </ListItem>
      ))}
    </List>      
    <h3>Trending Hashtag</h3>
    <Divider />
    <List>
    {['#trendingHashtag1', '#trendingHashtag2', '#trendingHashtag3', '#trendingHashtag4','#trendingHashtag5'].map((text, index) => (
      <ListItem button key={text}>   
      <ListItemText primary={text} />
      </ListItem>
      ))}
    </List>
    <h3>Your Hashtag</h3>
    <Divider />
    <List>
    {['#trendingHashtag1', '#trendingHashtag2', '#trendingHashtag3', '#trendingHashtag4','#trendingHashtag5'].map((text, index) => (
      <ListItem button key={text}>   
      <ListItemText primary={text} />
      </ListItem>
      ))}
    </List>
    </div>
    );


  return (
    <div className={classes.root}>
    <CssBaseline />
    <AppBar position="fixed" className={classes.appBar}>
    <Toolbar>
    <IconButton
    color="inherit"
    aria-label="Open drawer"
    edge="start"
    onClick={handleDrawerToggle}
    className={classes.menuButton}
    >
    <MenuIcon />
    </IconButton>
    <Typography variant="h6" noWrap>
    <TextField
    id="outlined-with-placeholder"
    label="Search"
    placeholder="Search"
    className={classes.textField}
    margin="normal"
    variant="outlined"
    />
    </Typography>
    </Toolbar>
    </AppBar>
    <nav className={classes.drawer}>
    <Hidden smUp implementation="css">
    <Drawer
    container={container}
    variant="temporary"
    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
    open={mobileOpen}
    onClose={handleDrawerToggle}
    classes={{
      paper: classes.drawerPaper,
    }}
    ModalProps={{
      keepMounted: true,
    }}
    >
    {drawer}
    </Drawer>
    </Hidden>
    <Hidden xsDown implementation="css">
    <Drawer
    classes={{
      paper: classes.drawerPaper,
    }}
    variant="permanent"
    open
    >
    {drawer}
    </Drawer>
    </Hidden>
    </nav>
    <main className={classes.content}>
    <div className={classes.toolbar} />
    <div className="profile_main_class">
    <Grid container spacing={12}>
    <Grid item sm={1}>
    <div className="profile_img">
    <img src={require('./bg.jpg')} />
    </div>
    </Grid>
    <Grid item sm={11}>
    <h1>Username</h1>
    <span>@username</span>
    </Grid>
    </Grid>
    </div>
    <div className="main_class_post">
    <div className="tweet_class1">
    <Grid container spacing={12}>
    <Grid item sm={2}>
    <div className="profile_image_post">
    <img src={require('./main_img.jpg')} />
    </div>
    </Grid>
    <Grid item sm={10}>
    <span className="username_title">Username</span>
    <span className="gray">@username</span> 
    <p><span>Tamilnadu has for a long time, voted for regional parties. They think if a National par
    ty comes to power their culture will be diluted & Hindi will be imposed on them. This is not true. In fact, goodness of Tamil
    culture is being adopted by others.<span className="hashtag">#hashtag</span> Hope for changes.</span></p>
    <p className="hashtag">#hashtag</p>

    <div className="like_comment">
    <Grid container spacing={12}>
    <Grid item sm={2}>
    <FavoriteBorderIcon className={classes.icon} />
    <p>0</p>
    </Grid>
    <Grid item sm={2} className="">
    <CommentIcon className={classes.icon} />
    <p>0</p>
    </Grid>
    <Grid item sm={2}>
    <MailIcon className={classes.icon} />
    </Grid>
    </Grid>
    </div>

    </Grid>
    </Grid>
    </div>
    <div className="tweet_class1">
    <Grid container spacing={12}>
    <Grid item sm={2}>
    <div className="profile_image_post">
    <img src={require('./main_img.jpg')} />
    </div>
    </Grid>
    <Grid item sm={10}>
    <span className="username_title">Username</span>
    <span className="gray">@username</span> 
    <p><span>Tamilnadu has for a long time, voted for regional parties. They think if a National par
    ty comes to power their culture will be diluted & Hindi will be imposed on them. This is not true. In fact, goodness of Tamil
    culture is being adopted by others.<span className="hashtag">#hashtag</span> Hope for changes.</span></p>
    <p className="hashtag">#hashtag</p>
    <div className="image_tweet">
    <img src={require('./main_img.jpg')} />
    </div>

    <div className="like_comment">
    <Grid container spacing={12}>
    <Grid item sm={2}>
    <FavoriteBorderIcon className={classes.icon} />
    <p>0</p>
    </Grid>
    <Grid item sm={2} className="">
    <CommentIcon className={classes.icon} />
    <p>0</p>
    </Grid>
    <Grid item sm={2}>
    <MailIcon className={classes.icon} />
    </Grid>
    </Grid>
    </div>


    </Grid>
    </Grid>
    </div>
    <div className="tweet_class1">
    <Grid container spacing={12}>
    <Grid item sm={2}>
    <div className="profile_image_post">
    <img src={require('./main_img.jpg')} />
    </div>
    </Grid>
    <Grid item sm={10}>
    <span className="username_title">Username</span>
    <span className="gray">@username</span> 
    <p><span>Tamilnadu has for a long time, voted for regional parties. They think if a National par
    ty comes to power their culture will be diluted & Hindi will be imposed on them. This is not true. In fact, goodness of Tamil
    culture is being adopted by others.<span className="hashtag">#hashtag</span> Hope for changes.</span></p>
    <p className="hashtag">#hashtag</p>
    </Grid>
    </Grid>
    </div>
    <div className="tweet_class1">
    <Grid container spacing={12}>
    <Grid item sm={2}>
    <div className="profile_image_post">
    <img src={require('./main_img.jpg')} />
    </div>
    </Grid>
    <Grid item sm={10}>
    <span className="username_title">Username</span>
    <span className="gray">@username</span> 
    <p><span>Tamilnadu has for a long time, voted for regional parties. They think if a National par
    ty comes to power their culture will be diluted & Hindi will be imposed on them. This is not true. In fact, goodness of Tamil
    culture is being adopted by others.<span className="hashtag">#hashtag</span> Hope for changes.</span></p>
    <p className="hashtag">#hashtag</p>
    </Grid>
    </Grid>
    </div>
    <div className="tweet_class1">
    <Grid container spacing={12}>
    <Grid item sm={2}>
    <div className="profile_image_post">
    <img src={require('./main_img.jpg')} />
    </div>
    </Grid>
    <Grid item sm={10}>
    <span className="username_title">Username</span>
    <span className="gray">@username</span> 
    <p><span>Tamilnadu has for a long time, voted for regional parties. They think if a National par
    ty comes to power their culture will be diluted & Hindi will be imposed on them. This is not true. In fact, goodness of Tamil
    culture is being adopted by others.<span className="hashtag">#hashtag</span> Hope for changes.</span></p>
    <p className="hashtag">#hashtag</p>
    </Grid>
    </Grid>
    </div>
    <div className="tweet_class1">
    <Grid container spacing={12}>
    <Grid item sm={2}>
    <div className="profile_image_post">
    <img src={require('./main_img.jpg')} />
    </div>
    </Grid>
    <Grid item sm={10}>
    <span className="username_title">Username</span>
    <span className="gray">@username</span> 
    <p><span>Tamilnadu has for a long time, voted for regional parties. They think if a National par
    ty comes to power their culture will be diluted & Hindi will be imposed on them. This is not true. In fact, goodness of Tamil
    culture is being adopted by others.<span className="hashtag">#hashtag</span> Hope for changes.</span></p>
    <p className="hashtag">#hashtag</p>
    </Grid>
    </Grid>
    </div>

    <div className="tweet_class1">
    <Grid container spacing={12}>
    <Grid item sm={2}>
    <div className="profile_image_post">
    <img src={require('./main_img.jpg')} />
    </div>
    </Grid>
    <Grid item sm={10}>
    <span className="username_title">Username</span>
    <span className="gray">@username</span> 
    <p><span>Tamilnadu has for a long time, voted for regional parties. They think if a National par
    ty comes to power their culture will be diluted & Hindi will be imposed on them. This is not true. In fact, goodness of Tamil
    culture is being adopted by others.<span className="hashtag">#hashtag</span> Hope for changes.</span></p>
    <p className="hashtag">#hashtag</p>
    <div className="image_tweet">
    <img src={require('./main_img.jpg')} />
    </div>
    </Grid>
    </Grid>
    </div>
    </div>
    <div className="add_tweet">
    <Fab color="primary" aria-label="Add" onClick={handleClickOpen} className={classes.margin}>
    <AddIcon />
    </Fab>
    </div>
    <Dialog
    fullScreen={fullScreen}
    open={open}
    onClose={handleClose}
    aria-labelledby="responsive-dialog-title"
    >
    <DialogTitle id="responsive-dialog-title">{"Add Tweet"}</DialogTitle>
    <DialogContent>
    <DialogContentText>
    <TextField
    id="standard-full-width"
    label="Tweet"
    style={{ margin: 8 , width: 500}}
    placeholder="Text Here"
    fullWidth
    margin="normal"
    />
    </DialogContentText>
    </DialogContent>
    <DialogActions>
    <Button onClick={handleClose} color="primary">
    close
    </Button>
    <Button onClick={handleClose} color="primary" autoFocus>
    Add
    </Button>
    </DialogActions>
    </Dialog>

    <div className="search_modals">
    <div>
    <div className="tweet_class_search">
    <Grid container spacing={12}>
    <Grid item sm={2}>
    <div className="profile_image_post1">
    <img src={require('./main_img.jpg')} />
    </div>
    </Grid>
    <Grid item sm={10}>
    <span className="username_title">Username111111</span>
    <span className="gray">@username</span> 
    <p><span>Tamilnadu has for a long time, voted for regional parties. They think if a National par
    ty comes to power their culture will be diluted & Hindi will be imposed on them. This is not true. In fact, goodness of Tamil
    culture is being adopted by others.<span className="hashtag">#hashtag</span> Hope for changes.</span></p>
    <p className="hashtag">#hashtag</p>
    </Grid>
    </Grid>
    </div>
    </div>
    <div>
    <div className="tweet_class_search">
    <Grid container spacing={12}>
    <Grid item sm={2}>
    <div className="profile_image_post1">
    <img src={require('./main_img.jpg')} />
    </div>
    </Grid>
    <Grid item sm={10}>
    <span className="username_title">Username222222</span>
    <span className="gray">@username</span> 
    <p><span>Tamilnadu has for a long time, voted for regional parties. They think if a National par
    ty comes to power their culture will be diluted & Hindi will be imposed on them. This is not true. In fact, goodness of Tamil
    culture is being adopted by others.<span className="hashtag">#hashtag</span> Hope for changes.</span></p>
    <p className="hashtag">#hashtag</p>
    </Grid>
    </Grid>
    </div>
    </div>
    <div>
    <div className="tweet_class_search">
    <Grid container spacing={12}>
    <Grid item sm={2}>
    <div className="profile_image_post1">
    <img src={require('./main_img.jpg')} />
    </div>
    </Grid>
    <Grid item sm={10}>
    <span className="username_title">Username333333</span>
    <span className="gray">@username</span> 
    <p><span>Tamilnadu has for a long time, voted for regional parties. They think if a National par
    ty comes to power their culture will be diluted & Hindi will be imposed on them. This is not true. In fact, goodness of Tamil
    culture is being adopted by others.<span className="hashtag">#hashtag</span> Hope for changes.</span></p>
    <p className="hashtag">#hashtag</p>
    </Grid>
    </Grid>
    </div>
    </div>
    <div>
    <div className="tweet_class_search">
    <Grid container spacing={12}>
    <Grid item sm={2}>
    <div className="profile_image_post1">
    <img src={require('./main_img.jpg')} />
    </div>
    </Grid>
    <Grid item sm={10}>
    <span className="username_title">Username444444</span>
    <span className="gray">@username</span> 
    <p><span>Tamilnadu has for a long time, voted for regional parties. They think if a National par
    ty comes to power their culture will be diluted & Hindi will be imposed on them. This is not true. In fact, goodness of Tamil
    culture is being adopted by others.<span className="hashtag">#hashtag</span> Hope for changes.</span></p>
    <p className="hashtag">#hashtag</p>
    </Grid>
    </Grid>
    </div>
    </div>
    </div>


    </main>
    </div>
    );
}

ResponsiveDrawer.propTypes = {
  container: PropTypes.object,
};

export default ResponsiveDrawer;