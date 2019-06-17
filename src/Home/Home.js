import React, { Component } from 'react';
import NavBar from '../Components/NavBar';

import "./Home.css"

class Home extends Component {

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
        return(
            <div className="Home">
                <NavBar logo={true}/>
                <NavBar logo={false}/>
                <div className="HomeContainer">
                    <h1>Qianhui Sun: CS graduate student in NU</h1>
                    <div className="text"><br/>> &nbsp; say hello at: <a href="mailto:qianhuisun2020@gmail.com">qianhuisun2020@gmail.com</a></div>
                    <div className="text"><br/>> &nbsp; ./memu</div>
                    <div className="text">
                        <br/>
                        Welcome!
                        <br/>
                        Where would you like to go next?
                        <br/>
                        <ol>
                            <li><a href="/portfolio">Portfolio</a></li>
                            <li><a href="/resume">Resume</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ol>
                    </div>
                    <div className="text"><br/>> &nbsp; ./portfolio</div>
                    <div className="text">
                        <br/>
                        Listed in order of recency. 1 = newest.
                        <br/>
                        Click for more information.
                        <br/>
                        <ol>
                            <li><a href="/portfolio/memento">Memento</a></li>
                            <li><a href="/portfolio/forensic">Forensic -- Data Reduction</a></li>
                            <li><a href="/portfolio/traffic">Traffic Sign Classification</a></li>
                            <li><a href="/portfolio/skillconnect">SkillConnect</a></li>
                            <li><a href="/portfolio/registration">Registration System</a></li>
                            <li><a href="/portfolio/nao">Tic-Tac-Toe Robot</a></li>
                        </ol>
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
}

export default Home;