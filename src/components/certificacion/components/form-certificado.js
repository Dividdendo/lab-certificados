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
  return ['Seleccionar certificado', 'Buscar Certificado', ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Certificados />;
    case 1:
      return "ingresa tu cedula";
   
    default:
      return <Error />;
  }
}

class FormCertificado extends React.Component {
  state = {
    activeStep: 0,
  };

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
       <h2 className={classes.cont} >Descarga tu Certificado</h2>
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
              <div className={classes.cont}>{getStepContent(activeStep)}</div>
              <div  className={classes.cont} >
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button variant="contained"  
                   color="primary" onClick={this.handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

FormCertificado.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(FormCertificado);



