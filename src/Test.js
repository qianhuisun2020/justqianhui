import React, { Component } from "react";
import { Document } from "react-pdf";

import file from './resume.pdf'

class Test extends Component {
    state = {
      numPages: null,
      pageNumber: 1,
    }
    error(error) {
      console.log(error);
    }
    onDocumentLoad = ({ numPages, pageNumber }) =>
      this.setState({
      numPages, pageNumber
    })
    onItemClick = ({ pageNumber }) =>
      this.setState({ pageNumber
    })
    previousPage = () => this.changePage(-1)
    nextPage = () => this.changePage(1)
    changePage = offset =>
      this.setState(prevState => ({
        pageNumber: (prevState.pageNumber || 1) + offset,
    }))
    render() {
      const { pageNumber, numPages } = this.state;
      return (
        <div>
          <Document
            file = {file}
            onLoadSuccess={this.onDocumentLoad}
            onItemClick={this.onItemClick}
          >
          </Document>
                 <div>
                  <button
                    disabled={pageNumber <= 1}
                    onClick={this.previousPage}
                  >
                    Précedante
                  </button>
                  <span>Page {pageNumber || (numPages ? 1 : '--')} sur {numPages || '--'}</span>
                  <button
                    disabled={pageNumber >= numPages}
                    onClick={this.nextPage}
                  >
                    Suivante
                  </button>
                </div>
        </div>
      );
    }
}
export default Test;