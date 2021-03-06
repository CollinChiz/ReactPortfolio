import React, { Component } from "react";
import PDFViewer from "../../components/PDFViewer";
import PDFJSBackend from "../../backends/pdfjs";

class Resume extends Component {
    render() {
        return (
            <div className="resume">
                <PDFViewer
                  backend={PDFJSBackend}
                  src='/Collin_Chisholm_Resume.pdf'
                />
            </div>
        );
    }
}

export default Resume;