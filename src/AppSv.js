import React, { Component } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Button, Menu, MenuItem} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Login from './components/security/Login'
import DispatchList from './components/dispatch/DispatchList'
import { Switch, Route, Link } from "react-router-dom";


const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    marginBottom: 20,
  },
  main: {
    marginTop: 150,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  uploadComponent: {
    width: '100%',
    height: '100%',
  },
  static: {
    position: 'fixed',
  }
};

class App extends Component {

  state = {
    isLoggedIn: false,
    anchorEl: null,
  }
  
  logIn() {
    const {isLoggedIn} = this.state
    this.setState({isLoggedIn: !isLoggedIn})
 
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props
    const { isLoggedIn, anchorEl } = this.state
    
    return (
      <div className="classes.container">
        <header className="classes.header">
          <AppBar position="fixed">
            <Toolbar> 
              {isLoggedIn?
              <div>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon  onClick={this.handleClick}/>
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
              <Link to="/pricebook" style={{ textDecoration: 'none', display: 'block' }}>
                <MenuItem onClick={this.handleClose}>PriceBooks</MenuItem>
              </Link>
              <Link to="upload" style={{ textDecoration: 'none', display: 'block' }}>
                <MenuItem onClick={this.handleClose} href="/upload">Upload Pricebook</MenuItem>
              </Link>
            </Menu>
            </div>
              : ''
              }
              <Typography variant="h6" color="inherit" className={classes.grow}>
                REI Pricing
              </Typography>
              <Button onClick={this.logIn.bind(this)} color="inherit">{isLoggedIn?'Logout':''}</Button>
            </Toolbar>
          </AppBar>
        </header>
        <div className="main">
            {isLoggedIn?
              <Switch>
                <Route exact path='/' component={DispatchList}/>
              </Switch>
              :
              <Login logIn={this.logIn.bind(this)}/>
          }
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
