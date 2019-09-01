import React, { Component } from 'react';
import YouTube from 'react-youtube';
import Zmage from 'react-zmage';
import NavBar from '../Components/NavBar';

import "./Portfolio.css"

class SkillConnect extends Component {

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
                    <h1>SkillConnect</h1>
                    <div className="text">
                        <br/>
                        > &nbsp; ./SkillConnect
                    </div>
                    <div className="text">
                        SkillConnect is a web application (frontend design) designed for teaching and learning.
                        <br/>
                        Images:
                    </div>
                    <Zmage src="../SkillConnect_1.jpg" width="720px" alt="SkillConnect_1.jpg" />
                    <Zmage src="../SkillConnect_2.jpg" width="720px" alt="SkillConnect_2.jpg" />
                    <Zmage src="../SkillConnect_3.jpg" width="720px" alt="SkillConnect_3.jpg" />
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

export default SkillConnect;