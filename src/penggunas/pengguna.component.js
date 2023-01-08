import { connect } from "react-redux";
import { penggunaAction } from "../_actions";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import {
  Button,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    flexGrow: 1,
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

  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class Pengguna extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(penggunaAction.getPengguna());
  }

  handleChange = (event) => {
    this.setState({
      anchor: event.target.value,
    });
  };

  handleClick = (event, id) => {
    const { dispatch } = this.props;
    dispatch(penggunaAction.deletePenggunaById(id));
  };

  render() {
    const { classes } = this.props;
    const { pengguna } = this.props.pengguna;

    return (
      <div>
        <Grid container style={{marginBottom:10}}>
          <Grid item xs={10}>
            <Typography>{"Pengguna"}</Typography>
          </Grid>

          <Grid item xs={2}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              component="a"
              href="/add-pengguna"
            >
              Add Pengguna
            </Button>
          </Grid>
        </Grid>

        <Grid container>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell numeric>Email</TableCell>
                  <TableCell numeric>Gender</TableCell>
                  <TableCell>status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pengguna.map((n) => {
                  return (
                    <TableRow key={n.id}>
                      <TableCell component="th" scope="row">
                        {n.name}
                      </TableCell>
                      <TableCell numeric>{n.email}</TableCell>
                      <TableCell numeric>{n.gender}</TableCell>
                      <TableCell>{n.status}</TableCell>
                      <TableCell>
                        <IconButton
                          className={classes.button}
                          aria-label="Edit"
                          component="a"
                          href={`/edit-pengguna/${n.id}`}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          className={classes.button}
                          aria-label="Delete"
                          onClick={(event) => this.handleClick(event, n.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </div>
    );
  }
}

Pengguna.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    pengguna: state.pengguna,
  };
};

const connectedPenggunaPage = withRouter(
  connect(mapStateToProps, null, null, {
    pure: false,
  })(withStyles(styles)(Pengguna))
);

export { connectedPenggunaPage as Pengguna };
