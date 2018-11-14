import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {firebase} from '../../../Firebase';

import MySnackbarContent from '../../shared/error/errors';

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
  constructor(props) {
    super(props);
    this.refDatbase = firebase.firestore().collection('profesores');
    this.state = {
      Documento: '',
      Nombre: '',
      Correo:'',
      Celular: '',
      msg:{
        estado : false,
        msg : '',
        tipo: ''
      }, 
      canSubmit: false,
    };
  }
  onSubmit = (e) => {
    this.setState( {canSubmit: false});
    const { Documento } = this.state;
    this.refDatbase.where("Documento", "==", Documento).get()
    .then(snapshot => {
      if(!snapshot.empty){
       if(snapshot.docs.length === 1){
      snapshot.forEach(doc => {
      this.props.persondata(doc.data()); // dar los valores al componente padre

     this.props.msgbn('A continuacion puede descargar tu Certificado');
      this.props.handleNext();
      });
    }else{
      
    this.setState({
      open: true, 
      canSubmit: true,
      msg: {
        estado: true,
        msg : 'Error este dato no es unico...',
        tipo: 'warning'
      }
    });
    //  console.log("Error en base de datos no es un dato unico.");
    }
    }else{
      this.setState({
        open: true, 
        canSubmit: true,
        msg: {
          estado: true,
        msg : 'Error usuario no encontrado',
        tipo: 'error'
        }
      });
   //   console.log("error usuario no encontrado");
    }
    })
    .catch(err => {
      this.setState({
        canSubmit: false,
        msg: {
          estado: true,
          msg : 'Error lo lamentamos no hemos podido conectarnos con el servidor.',
          tipo: 'warning'
        }
      });
      //console.log('Error getting documents', err);
    });
  }
  syncField(ev, fieldName){ // data form
    this.setState({
      canSubmit: true,
    });
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
   { this.state.msg.estado ? <MySnackbarContent variant={this.state.msg.tipo} className={classes.margin} message={ this.state.msg.msg}/> : 
 <p>Ingrese tu documento </p>
   } 

  
      <TextField
          id="standard-with-placeholder"
          label="Ingrese documento"
          placeholder="# Documento"
          ref="Documento"
          name="Documento"
          onChange={(e) => this.syncField(e,'Documento')}
          className={classes.textField}
          fullWidth={true}
          margin="normal"
        /> 
             <div  className={classes.cont} >
             <Button variant="contained"  
             type="submit"
                  disabled={!this.state.canSubmit}
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