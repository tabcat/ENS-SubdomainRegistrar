import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Utility from './utility'

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class Toolbox extends React.Component {

  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  handleChange = panel => (event, expanded) => {
   this.setState({
     expanded: expanded ? panel : false,
   });
 };

  render(){
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>ToolBox</Typography>
            <Typography className={classes.secondaryHeading}>Hashing utilities and more! (mostly just hashing utilities)</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Utility/>
          </ExpansionPanelDetails>
        </ExpansionPanel>
    )
  }
}

Toolbox.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Toolbox);
