import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: 0,
    background: "#e3f2fd",
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      alignItems="center"
    >
      <Grid container justify="center" sm={4}>
        <Grid item>
          <p>이것은 사피프로젝트 입니다.</p>
        </Grid>
      </Grid>
      <Grid container justify="center" sm={4}>
        <Grid item sm={4}>
          <img
            height={40}
            src={process.env.PUBLIC_URL + "/logo192.png"}
            alt="logo"
          />
        </Grid>
      </Grid>
      <Grid container justify="center" sm={4}>
        <Grid item sm={4}>
          <p>머시기 머시기</p>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
