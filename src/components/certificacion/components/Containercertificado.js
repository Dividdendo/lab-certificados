import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';

import Snackbar from '@material-ui/core/Snackbar';



import MySnackbarContent from '../../shared/error/errors';
//import shared
import Error from '../../shared/error';
import Certificados from './certificados';
import DetalleCertificado from './detallesCertificado';

const styles = theme => ({
  root: {
    width: '90%',
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  cont:{
    display: 'flex',
     justifyContent: 'center'
  }
});

function getSteps() {
  return ['document', 'Certificate', ];
}


class ContainerCertificado extends React.Component {
  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Certificados handleNext={this.handleNext}  persondata={this.persondata}  msgbn={this.msgbn}/>;
      case 1:
        return (<DetalleCertificado handleNext={this.handleNext}  // adelantar 
          handleBack={this.handleBack}
           teacher={this.state.teacher} // persona 
           msgbn={this.msgbn} // mesaje
             />);
     
      default:
        return <Error />;
    }
  }
  constructor(props){
    super(props);
    this.state ={
      activeStep: 0,
      teacher: {},
      open: false,
      msgMo: ''
    }
    this.handleNext =this.handleNext.bind(this);
    this.handleBack =this.handleBack.bind(this);

    
}
persondata =(data)=> {
  this.setState(state => ({
    teacher: data,
  }));
}
 

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

 msgbn = (mensage) => {
    this.setState(state => ({
      open: true, 
      msgMo: mensage
    }));
  }

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };
  
handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  this.setState({ open: false });
};

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    return (
      <div className={classes.root}>
       <h2 className={classes.cont} >Download your Certificate  </h2>
       <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <MySnackbarContent
            onClose={this.handleClose}
            variant="success"
            message={this.state.msgMo}
          />
          </Snackbar>
        <Stepper activeStep={activeStep} alternativeLabel>
       
          {steps.map(label => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <div >

             <p className={classes.cont} >Descarga finalizada correctamente.</p> 
             <div className={classes.cont}>
             <Button    variant="contained" color="primary"  onClick={this.handleReset}  > Terminar</Button>
             </div>
            </div>
          ) : (
            <div   >
              <div className={classes.cont}>{this.getStepContent(activeStep)}</div>
         
            </div>
          )}
        </div>
      </div>
    );
  }
}

ContainerCertificado.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(ContainerCertificado);



