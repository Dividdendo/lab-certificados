import React from 'react';
import Page from './Page';
import CertifIBM from '../../../../assets/CertifIBM.png'; 

const Styles = {
  div: {
    position: "relative",
    top: "260px",
  },
  img: {
width: "210mm"
  },
  cont:{
    display: 'flex',
     justifyContent: 'center'
  }
  
};
class Certificado extends React.Component {
  render() {
    return(
        <Page  singleMode={true} id={this.props.id}>
        <div style={Styles.div}>
                  <div  style={Styles.cont}>
                   {this.props.teacher.Nombre} </div>
                <p style={Styles.cont}>
                CC {this.props.teacher.Documento}
                </p>
        </div>
        <img style={Styles.img} src={CertifIBM} alt="img certtificado" />
</Page>
    )

  }
}

export default Certificado;