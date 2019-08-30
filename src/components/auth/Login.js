import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing(1),
    width: 300
  },
  input: {
    display: 'none'
  }
}));

const Login = () => {
  const classes = useStyles();

  const onSubmit = e => {
    e.preventDefault();
    console.log('Login');
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='sm'>
        <form className={classes.container} onSubmit={onSubmit}>
          <h1 align='center'>Account Login</h1>
          <TextField
            id='user-name'
            label='Name'
            className={classes.textField}
            margin='normal'
          />
          <TextField
            id='password'
            label='Password'
            type='password'
            className={classes.textField}
            margin='normal'
          />
          <Button
            type='submit'
            color='primary'
            variant='contained'
            className={classes.button}
          >
            Submit
          </Button>
        </form>
      </Container>
    </React.Fragment>
  );
};

export default connect(null)(Login);
