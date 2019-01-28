import React,  {Component} from 'react'
import {Button, TextField, Card, CardHeader, CardContent, Avatar, InputAdornment} from '@material-ui/core';
import {Lock, PersonOutline, LockOpen} from '@material-ui/icons'
import Ron from '../../images/ron.jpg'
import { withStyles } from '@material-ui/core/styles';

const styles = {
   root: {
      display: 'flex',          
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 175,
      height: '100vh',
      width: '100%',
      borderBottom: '2px solid gray',
     
   },
   title: {
     color: 'white',
     fontSize: '1.2em',
   },
   inputText: {
      marginBottom: 20,
      width: 350,
      readOnly: true,
   },
   submitButton: {
      marginTop: 30,
   },
   container: {
       width: 650,
       height: 350,
       backgroundColor: '#fafafa',
   },
   cardHeader: {
    height: 60,
    width: 300,
    borderRadius: 10,
    backgroundImage: 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)',
   
    position: 'absolute',
    marginTop: -40,
    marginLeft: 10,
    boxShadow:
    "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
    },
    cardContent: {
        display: 'flex',
    },
    avatar: {
        background: 'transparent',
    },
    avatarImg: {
        fontSize: '1.7em',
    },
    contentMargin: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    submitDiv: {
       width: '75%',
       display: 'flex',
       justifyContent: 'space-between',
    }, 
    icon: {
        fontSize: '1.8em',
        
    },
    employeeImg: {
        margin: 40,
        width: 200,
        height: 200,
    }
 }

class Employee extends Component {

   state = {
   
   }

   fileChanged(event) {
  
      this.setState({priceBook: event.target.value})

   }

   onSubmit(event) {
      event.preventDefault()
      this.props.logIn()
   }

   onReset(event) {
      this.setState({ priceBook: 'File To Upload...'})
   }

   render() {
    
      const { classes } = this.props
      const {message} = this.state
    
      return (
         <div className={classes.root}>
            <Card className={classes.container}>
               <CardHeader title="Employee Maintenace" className={classes.cardHeader}
                classes={{
                    title: classes.title,
                }}
                avatar={
                    <Avatar className={classes.avatar}>
                        <PersonOutline className={classes.avatarImg} />
                    </Avatar>}
               />
               <CardContent>
                <div className={classes.cardContent}>
                    <img src={Ron} alt="blah" className={classes.employeeImg} />
                    <form className={classes.contentMargin}>
                    
                        <TextField className={classes.inputText}
                            placeholder="Email..."
                            InputProps={{
                            startAdornment: <InputAdornment position="start"><PersonOutline className={classes.icon}/></InputAdornment>
                        }}/>
                        <TextField className={classes.inputText}
                            placeholder="First Name..."
                            InputProps={{
                            startAdornment: <InputAdornment position="start"><PersonOutline className={classes.icon }/></InputAdornment>
                        }}/>
                        <TextField className={classes.inputText}
                            placeholder="Last Name..."
                            InputProps={{
                            startAdornment: <InputAdornment position="start"><PersonOutline className={classes.icon}/></InputAdornment>
                        }}/>
                        <TextField className={classes.inputText}
                            placeholder="Password..."
                            InputProps={{
                            startAdornment: <InputAdornment position="start"><LockOpen  className={classes.icon}/></InputAdornment>
                        }}/>

                        <div className={classes.submitDiv}>
                        <Button variant="contained" onClick={this.onSubmit.bind(this)} color="primary" className={classes.submitButton}>Submit</Button>
                        <Button variant="contained" onClick={this.onReset.bind(this)} color="secondary" className={classes.submitButton}>Reset</Button>
                        </div>
                    </form>
                </div>
                <label>{message}</label>
               </CardContent>
            </Card>
         </div>
      )
   }

}

export default withStyles(styles)(Employee);