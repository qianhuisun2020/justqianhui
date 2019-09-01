import React, { Component } from 'react';
import YouTube from 'react-youtube';
import NavBar from '../Components/NavBar';

import "./Portfolio.css"

class Nao extends Component {

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
                    <h1>Tic-Tac-Teo Robot</h1>
                    <div className="text">
                        <br/>
                        > &nbsp; ./Tic-Tac-Teo Robot
                    </div>
                    <div className="text">
                        Tic-Tac-Teo Robot is a robot that plays Tic-Tac-Toe on a real chessboard.
                        <br/>
                        video:
                    </div>
                    <YouTube videoId="JbTF1fEWtpY" opts={opts} onReady={this._onReady} />
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

export default Nao;