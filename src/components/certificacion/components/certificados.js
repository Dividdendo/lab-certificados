import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {firebase} from '../../../Firebase';



const styles = theme => ( {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});


class Certificados extends React.Component{
  constructor() {
    super();
    this.refDatbase = firebase.firestore().collection('profesores');
    this.state = {
      apellido: '',
      nombre: '',

    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    const { apellido } = this.state;
    this.refDatbase.where("Apellido", "==", 'Hola leguizamon').get()
    .then(snapshot => {
      if(!snapshot.empty){
       if(snapshot.docs.length == 1){
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
       this.props.handleNext();
      });
    }else{
      console.log("Error en base de datos no es un dato unico.");
    }
    }else{
      console.log("error usuario no encontrado");
    }
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
  }

  syncField(ev, fieldName){ // data form
    let element =ev.target;
    let value = element.value; 
    let jsonState= {};
    jsonState[fieldName]= value;
    this.setState(jsonState);
}
render() {
  const { classes } = this.props; 
  return (
    <div >
      <TextField
          id="standard-with-placeholder"
          label="Ingrese documento"
          placeholder="# Cedula"
          type="number"
          ref="apellido"
          name="apellido"
          onChange={(e) => this.syncField(e,'apellido')}
          className={classes.textField}
          fullWidth={true}
          margin="normal"
        /> 
             <div  className={classes.cont} >
             <Button variant="contained"  
                   color="primary"
                    onClick={this.onSubmit}>
        search
      </Button>
              </div>
       

    </div>
   
  );
}

}

Certificados.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Certificados);