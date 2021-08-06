import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TaskDashboard from './DashboardItems/TasksDashoard'
import GoalsDashboard from './DashboardItems/GoalsDashboard'

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(6),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Dashboard extends Component {

  render() {
    const {classes} = this.props;

    return(
    <div className = {classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <TaskDashboard/>
        </Grid>
        <Grid item xs>
          <GoalsDashboard/>
        </Grid>
        <Grid item xs ={6}>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
     
    </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Dashboard);
