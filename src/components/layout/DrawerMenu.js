import React, {Component} from 'react'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import { LocalShipping, Directions, Person, People, Build } from '@material-ui/icons'
import ReportList from '@material-ui/icons/List'
import MailIcon from '@material-ui/icons/Mail'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import { Link } from 'react-router-dom'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
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
  listItem: {
    textDecoration: 'none',

  },
  listIcon: {
    color: 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)',
  }
});

class DrawerMenu extends Component {

  render() {

        const { classes, theme, open, handleClose } = this.props
  
        return (
            <Drawer
              className={classes.drawer}
              variant="permanent"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
            }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleClose}>
                  {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
              </div>
              <Divider />
              <List>
                  <Link to="/dispatch" className={classes.listItem}>
                    <ListItem button >
                        <ListItemIcon className={classes.listIcon}><LocalShipping /></ListItemIcon>
                        <ListItemText primary='Dispatch'/>
                    </ListItem>
                  </Link>
              </List>
              <Divider />
              <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
              <List>
                  <Link to="/routes" className={classes.listItem}>
                    <ListItem button>
                      <ListItemIcon className={classes.listIcon}><Directions /></ListItemIcon>
                       <ListItemText primary='Routes'  />
                    </ListItem>
                  </Link>
              </List>
              <List>
                <Link to="/customers" className={classes.listItem}>
                  <ListItem button>
                    <ListItemIcon className={classes.listIcon}><People /></ListItemIcon>
                    <ListItemText primary='Customers'  />
                  </ListItem>
                </Link>
              </List>
              <List>
                  <Link to="/employees" className={classes.listItem}>
                    <ListItem button>
                      <ListItemIcon className={classes.listIcon}><Person /></ListItemIcon>
                      <ListItemText primary='Employees'  />
                    </ListItem>
                  </Link>
              </List>
              <List>
                  <Link to="/config" className={classes.listItem}>
                    <ListItem button>
                      <ListItemIcon className={classes.listIcon}><Build /></ListItemIcon>
                      <ListItemText primary='Config'  />
                    </ListItem>
                  </Link>
              </List>
              <List>
                <Link to="/reports" className={classes.listItem}>
                    <ListItem button>
                      <ListItemIcon className={classes.listIcon}><ReportList /></ListItemIcon>
                      <ListItemText primary='Reports'  />
                    </ListItem>
                  </Link>
              </List>
            </Drawer>
        )
    }
}

export default withStyles(styles, { withTheme: true })(DrawerMenu);
