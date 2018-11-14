import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

  class PrintButton extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
      
        };
  }
    render() {
      return (
  <div
    onClick={() => {
        console.log(this.props.id);
      const input = document.getElementById(this.props.id);
      html2canvas(input)
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save("download.pdf"); 
             this.props.handleNext();
            this.props.msgbn('Revisa las descargas pronto ya va a terminar.');
           
        });
    }}
  >
    {this.props.label}
  </div>
        );
      }
  }

export default PrintButton;