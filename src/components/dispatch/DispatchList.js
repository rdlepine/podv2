import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
      flexGrow: 1,
    },
    container: {
        marginTop: 0,
    }
}

class DispatchList extends Component {

    state = {
        open: false,
    }

    render() {

        const {classes} = this.props
        
        return (
            <div>
                <h1 className={classes.container}>DispatchList Here</h1>
            </div>
        )

    }
}

export default withStyles(styles)(DispatchList)