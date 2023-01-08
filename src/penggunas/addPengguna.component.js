import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { penggunaAction } from "../_actions";
import { withRouter } from "react-router-dom";
import { InputLabel, MenuItem, Select } from "@material-ui/core";
import { Label } from "@material-ui/icons";

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },

  contentRoot: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },

  appFrame: {
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  "appBar-left": {
    marginLeft: drawerWidth,
  },
  "appBar-right": {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class AddPengguna extends Component {
  handleChange = (prop) => (event) => {
    const { dispatch } = this.props;
    dispatch(penggunaAction.onChangeProps(prop, event));
  };
  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    if (params.id) {
      const { dispatch } = this.props;
      dispatch(penggunaAction.getPenggunaById(params.id));
    }
  }

  handleClick(event) {
    const {
      match: { params },
    } = this.props;
    const { dispatch } = this.props;

    let payload = {
      name: this.props.pengguna.name,
      email: this.props.pengguna.email,
      gender: this.props.pengguna.gender,
      status: this.props.pengguna.status,
    };

    if (params.id) {
      dispatch(penggunaAction.editPenggunaInfo(params.id, payload));
    } else {
      dispatch(penggunaAction.createPengguna(payload));
    }
  }

  render() {
    const { classes } = this.props;
    const {
      match: { params },
    } = this.props;
    function InsertText(props) {
      return <Typography>{"Add New Pengguna"}</Typography>;
    }

    function EditText(props) {
      return <Typography>{"Edit Pengguna"}</Typography>;
    }

    function SegHeader() {
      if (params.id) {
        return <EditText />;
      }
      return <InsertText />;
    }

    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <div>
              <Paper className={classes.contentRoot} elevation={1}>
                <form className={classes.container}>
                  <Grid container spacing={24}>
                    <Grid item xs={3}>
                      <TextField
                        id="name"
                        label="Name"
                        className={classes.textField}
                        value={this.props.pengguna.name}
                        onChange={this.handleChange("name")}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        id="email"
                        label="email"
                        className={classes.textField}
                        value={this.props.pengguna.email}
                        onChange={this.handleChange("email")}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={3} style={{marginTop:10}}>
                      <InputLabel id="demo-simple-select-label"  >gender</InputLabel>
                      <br/>
                      <Select
                        labelId="demo-simple-select-label"
                        id="gender"
                        value={this.props.pengguna.gender}
                        onChange={this.handleChange("gender")}
                        label="gender"
                        
                        >
                        <MenuItem value={'female'}>female</MenuItem>
                        <MenuItem value={'male'}>male</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={3} style={{marginTop:10}}>
                    <InputLabel id="demo-simple-select-label" >status</InputLabel>
                        <br/>
                      <Select
                        labelId="demo-simple-select-label"
                        id="status"
                        value={this.props.pengguna.status}
                        onChange={this.handleChange("status")}
                        label="status"
                        
                      >
                        <MenuItem value={'inactive'}>inactive</MenuItem>
                        <MenuItem value={'active'}>active</MenuItem>
                      </Select>
                    </Grid>
                  </Grid>
                  <br />
                  <Grid container spacing={24}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={3} container justify="center">
                      <Grid container spacing={24}>
                        <Grid item xs={6} container justify="center">
                          <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            component="a"
                            href="/"
                          >
                            Cancel
                          </Button>
                        </Grid>
                        <Grid item xs={6} container justify="flex-start">
                          <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={(event) => this.handleClick(event)}
                          >
                            Save
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

//export default Home;

AddPengguna.propTypes = {
  classes: PropTypes.object.isRequired,
};

//export default BoxCon
const mapStateToProps = (state) => {
  return state;
};

const connectedAddPenggunaPage = withRouter(
  connect(mapStateToProps, null, null, {
    pure: false,
  })(withStyles(styles)(AddPengguna))
);

export { connectedAddPenggunaPage as AddPengguna };
