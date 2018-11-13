import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';

 


import Certificado from "./Download/Certificado";
import PrintButton from "./Download/PrintButton";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  center:{
    display: 'flex',
     justifyContent: 'center'
  },
 
  iconSmall: {
    fontSize: 20,
  }
});

class DetalleCertificado extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        
          };
    }
    render() {
        const { classes } = this.props;
        return (
            <div >
                <div className={classes.center}>
<Button  variant="contained" size="small" >Reset</Button> 
            <PrintButton id={"Certificate"}  label={
                <Button variant="contained" size="small" >
                <SaveIcon className={classNames( classes.iconSmall)} />
                Save
              </Button>
            } />
            </div>
            <Certificado id={"Certificate"}  teacher={this.props.teacher} />
            </div>
          );
    }
}

DetalleCertificado.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetalleCertificado);