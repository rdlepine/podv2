import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
      flexGrow: 1,
    },
    container: {
        marginTop: 75,
    }
}

class DispatchList extends Component {

    state = {
        open: false,
    }

    render() {

        const {classes} = this.props
        
        return (
            <div className={classes.container}>
                <h1 className={classes.container}>DispatchList Here</h1>
             
            </div>
        )

    }
}

export default withStyles(styles)(DispatchList)