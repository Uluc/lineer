import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from '@material-ui/core/styles';

const useStyles = (theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class TasksDashoard extends Component {

  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      checked: false,
    };
  }
  handleToggle = (value) => () => {
    
    this.setState({checked: !this.checked});
    console.log("checked" + value)
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="h4" color="initial">Tasks
        </Typography>
        <List className={classes.root}>
          {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <ListItem
                key={value}
                role={undefined}
                dense
                button
                onClick={this.handleToggle(value)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={this.checked}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`Task ${value + 1}`} />
            
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  }
}

export default (withStyles(useStyles)(TasksDashoard));
