import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
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
                            <li><NavLink to='/portfolio'><a>Portfolio</a></NavLink></li>
                            <li><NavLink to='/resume'><a>Resume</a></NavLink></li>
                            <li><NavLink to='/contact'><a>Contact</a></NavLink></li>
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
                            <li><NavLink to='/portfolio/memento'><a>Memento</a></NavLink></li>
                            <li><NavLink to='/portfolio/forensic'><a>Forensic -- Data Reduction</a></NavLink></li>
                            <li><NavLink to='/portfolio/traffic'><a>Traffic Sign Classification</a></NavLink></li>
                            <li><NavLink to='/portfolio/skillconnect'><a>SkillConnect</a></NavLink></li>
                            <li><NavLink to='/portfolio/registration'><a>Registration System</a></NavLink></li>
                            <li><NavLink to='/portfolio/nao'><a>Tic-Tac-Toe Robot</a></NavLink></li>
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