import React, { Component } from 'react';
import YouTube from 'react-youtube';
import NavBar from '../Components/NavBar';

import "./Portfolio.css"

class Memento extends Component {

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
                    <h1>Portfolio/Memento</h1>
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
        event.target.stopVideo();
    }
}

export default Memento;