import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const PrintButton = ({id, label}) => (
 

  <div
    onClick={() => {
        console.log(id);
      const input = document.getElementById(id);
      html2canvas(input)
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save("download.pdf"); 
        });
    }}
  >
    {label}
  </div>
);

export default PrintButton;