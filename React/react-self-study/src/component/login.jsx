import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginTop: 10,
  },
});

function Login() {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <h1>로그인</h1>
          </Grid>
          <Grid item>
            <TextField label="ID" type="id"></TextField>
          </Grid>
          <Grid item>
            <TextField label="Password" type="Password"></TextField>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              로그인
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Login;
