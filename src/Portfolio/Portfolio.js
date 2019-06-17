import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import YouTube from 'react-youtube';
import NavBar from '../Components/NavBar';

import "./Portfolio.css"

class Portfolio extends Component {

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
                    <h1>Portfolio</h1>
                    <div className="text">
                        <br/>
                        > &nbsp; ./Memento
                        <br/> 
                        Memento is a wearable reminder based on facial recognition.
                        <br/>
                        video:
                        <br/>
                    </div>
                    <YouTube videoId="CE1G44WU3Rc" opts={opts} onReady={this._onReady} />
                    <div className="text">
                        <NavLink to='/portfolio/memento'><a>Click to Learn more</a></NavLink>
                    </div>
                    <div className="text">
                        <br/>
                        > &nbsp; ./Forensic
                        <br/> 
                        Forensic is project in which we implemente algorithms that reduces system-level data and preserves event chains.
                        <br/>
                        image:
                        <br/>
                    </div>
                    <div className="text">
                        <NavLink to='/portfolio/forensic'><a>Click to Learn more</a></NavLink>
                    </div>
                    <div className="text">
                        <br/>
                        > &nbsp; ./Traffic Sign Classification
                        <br/> 
                        A project in which I implemented several neural network structures that recognize traffic signs.
                        <br/>
                        images:
                        <br/>
                    </div>
                    <div className="text">
                        <NavLink to='/portfolio/traffic'><a>Click to Learn more</a></NavLink>
                    </div>
                    <div className="text">
                        <br/>
                        > &nbsp; ./SkillConnect
                        <br/> 
                        SkillConnect is a web application (frontend design) designed for teaching and learning.
                        <br/>
                        image:
                        <br/>
                    </div>
                    <div className="text">
                        <NavLink to='/portfolio/skillconnect'><a>Click to Learn more</a></NavLink>
                    </div>
                    <div className="text">
                        <br/>
                        > &nbsp; ./Registration System
                        <br/> 
                        Registration System is a system that generates 3D images of objects and registers them to the robot coordination.
                        <br/>
                        image:
                        <br/>
                    </div>
                    <div className="text">
                        <NavLink to='/portfolio/registration'><a>Click to Learn more</a></NavLink>
                    </div>
                    <div className="text">
                        <br/>
                        > &nbsp; ./Tic-Tac-Teo Robot
                        <br/> 
                        Tic-Tac-Teo Robot is a robot that plays Tic-Tac-Toe on a real chessboard.
                        <br/>
                        video:
                        <br/>
                    </div>
                    <YouTube videoId="JbTF1fEWtpY" opts={opts} onReady={this._onReady} />
                    <div className="text">
                        <NavLink to='/portfolio/nao'><a>Click to Learn more</a></NavLink>
                    </div>
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

export default Portfolio;