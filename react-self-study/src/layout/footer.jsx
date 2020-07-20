import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: 0,
    paddingBottom: 10,
    background: "#e3f2fd",
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container direction="column">
      <Grid item>
        <Grid container direction="row" alignItems="center" spacing={2}>
          <Grid item>
            <img
              height={40}
              src={process.env.PUBLIC_URL + "/logo192.png"}
              alt="logo"
            />
          </Grid>
          <Grid item>
            <span>(주) Guzzi</span>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row" justify="space-around">
          <Grid item>
            <p>이것은 사피프로젝트 입니다.</p>
          </Grid>
          <Grid item>
            <p>머시기 머시기</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
