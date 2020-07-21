import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";

class Header extends Component {
  state = {};
  render() {
    return (
      <AppBar position="static">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          bgcolor="primary.main"
        >
          <Grid item>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                this.props.onChangePage("main");
              }}
            >
              <img
                height={40}
                src={process.env.PUBLIC_URL + "/logo192.png"}
                alt="logo"
              />
            </a>
          </Grid>
          <Grid item>
            <Grid container spacing={10}>
              <Grid item>
                <Button>
                  <Box color="white">Create a vote</Box>
                </Button>
              </Grid>
              <Grid item>
                <Button>
                  <Box color="white">Create a vote</Box>
                </Button>
              </Grid>
              <Grid item>
                <Button>
                  <Box color="white">Create a vote</Box>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <SearchSharpIcon></SearchSharpIcon>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => {
                    this.props.onChangePage("Login");
                  }}
                >
                  <Box color="white">Sign In</Box>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    );
  }
}

export default Header;
