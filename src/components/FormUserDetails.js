import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
    '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
    },
    },
}));

export default function FormUserDetails(props) {
    const classes = useStyles();
    const {nextStep , handleChange ,values} = props         

    return (
    <form className={classes.root} noValidate autoComplete="off">
        <TextField 
            id="standard-basic" 
            placeholder="Enter Your First Name"
            label="First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}/><br/>
        <TextField 
            id="standard-basic" 
            placeholder="Enter Your Last Name"
            label="Last Name"
            onChange={handleChange('lastname')}
            defaultValue={values.lastName}/><br/>
        <TextField 
            id="standard-basic" 
            placeholder="Enter Your email"
            label="email"
            onChange={handleChange('email')}
            defaultValue={values.email}/><br/>
        <Button variant="contained" color="primary" onClick={nextStep}>
        continue
        </Button>
        
        
    </form>
    );
}