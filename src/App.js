import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route, Link } from "react-router-dom";
import DispatchList from './components/dispatch/DispatchList'
import RouteList from './components/routes/RouteList'
import Login from './components/security/Login'
import DrawerMenu from './components/layout/DrawerMenu'
import PodNav from './components/layout/PodNav'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

});

class PersistentDrawerLeft extends React.Component {
  state = {
    open: false,
    isLoggedIn: false,
  };

  logIn() {
    const {isLoggedIn} = this.state
    this.setState({isLoggedIn: !isLoggedIn})
 
  }
  handleDrawerOpen = () => {
    this.setState({ open: true });
  }

  handleDrawerClose = () => {
    this.setState({ open: false });
  }

  render() {
    const { classes} = this.props;
    const { open, isLoggedIn } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <PodNav open={open} isLoggedIn={isLoggedIn}
                            handleDrawerOpen={this.handleDrawerOpen} >
         </PodNav>
        <DrawerMenu open={open} handleClose={this.handleDrawerClose}/>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div>
            {isLoggedIn?
              <Switch>
                <Route exact path='/' component={DispatchList}/>
                <Route exact path='/dispatch' component={DispatchList}/>
                <Route exact path='/routes' component={RouteList}/>
              </Switch>
              :
              <Login logIn={this.logIn.bind(this)}/>
            }
          </div>
          
        </main>
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);
