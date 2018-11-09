import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


//import shared
import Error from '../../shared/error';
import Certificados from './certificados';


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
        return <Certificados handleNext={this.handleNext} handleBack={this.handleBack} />;
      case 1:
        return "ingresa tu cedula";
     
      default:
        return <Error />;
    }
  }
  constructor(props){
    super(props);
    this.state ={
      activeStep: 0
    }
    this.handleNext =this.handleNext.bind(this);
    this.handleBack =this.handleBack.bind(this);

    
}
 

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

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

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    return (
      <div className={classes.root}>
       <h2 className={classes.cont} >Download your Certificate</h2>
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
            <div>
                
              <Typography className={classes.cont}> Ver Certificado y descargar</Typography>
              
              <Button onClick={this.handleReset}>Reset</Button>
              <Button variant="contained" color="primary"   >Confirmar</Button>
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



