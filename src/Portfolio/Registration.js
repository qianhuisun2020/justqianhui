import React, { Component } from 'react';
import YouTube from 'react-youtube';
import NavBar from '../Components/NavBar';

import "./Portfolio.css"

class Registration extends Component {

    constructor(props) {
        super(props);
        this.state={
            curTime: null,
        }
    }

    componentDidMount() {
        setInterval( () => {
            this.setState({
                curTime : new Date().getSeconds() 
            })
        },100)
    }

    render() {

        const opacity = (this.state.curTime % 2)
        const opts = {
            height: '480',
            width: '720',
            playerVars: {
                autoplay: 1
            }
        };

        return(
            <div className="Portfolio">
                <NavBar logo={true}/>
                <NavBar logo={false}/>
                <div className="PortfolioContainer">
                    <h1>Portfolio/Registration System</h1>
                    <div className="text">
                        <br/>
                        > &nbsp; ./Registration System
                        <br/> 
                        Registration System is a system that generates 3D images of objects and registers them to the robot coordination.
                        <br/>
                        Images:
                        <br/>
                    </div>
                    <div>Images coming soon.</div>
                    <div className="text">
                        <br/>
                        > &nbsp; <a style={{opacity}}>|</a> 
                        <br/>
                    </div>
                </div>
            </div>
        )
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

export default Registration;