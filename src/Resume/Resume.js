import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import NavBar from '../Components/NavBar';

import "./Resume.css"
import resume from "../1.pdf"

class Resume extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            opacity: null,
            numPages: null,
            pageNumber: 1,
        }
    }

    onDocumentLoadSuccess = ({numPages}) => {
        this.setState({numPages});
    }
    goToPrevPage = () =>
        this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
    goToNextPage = () =>
        this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

    componentDidMount() {
        setInterval( () => {
            this.setState({
                opacity : new Date().getSeconds() % 2
            })
        },100)
    }

    render() {
        const { opacity, pageNumber, numPages } = this.state;

        return(
            <div className="Contact">
                <NavBar logo={true}/>
                <NavBar logo={false}/>
                <div className="ResumeContainer">
                    <h1>Resume</h1>
                    <div className="text">
                        <br/>
                        > &nbsp; ./resume
                        <br/>
                    </div>
                    <div>
                        <div style={{ width: 600 }}>
                            <Document
                                file="./1.pdf"
                                onLoadSuccess={this.onDocumentLoadSuccess}
                            >
                            </Document>
                        </div>
                    </div>
                    <div className="text">
                        <br/>
                        > &nbsp; Thanks for reading, have a nice day. :-)<a style={{opacity}}>|</a> 
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;