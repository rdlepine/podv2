import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundImage: 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)',
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20,
    },
    companyTitle: {
        marginLeft: 40,
    },
  })

const drawerWidth = 240;

class PodNav extends Component {

    render() {

        const { classes, open, isLoggedIn, handleDrawerOpen } = this.props;

        return (
            <div>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar disableGutters={!open}>

                        {
                            isLoggedIn?
                            <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}
                            >
                            <MenuIcon />
                            </IconButton>
                            :
                            ''
                        }
                        <Typography variant="h6" color="inherit" noWrap >
                        <span className={classes.companyTitle}>
                                POD Dispatch
                        </span>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(PodNav);