import React, { Component } from 'react';
import NavBar from '../Components/NavBar';

import "./Contact.css"

class Contact extends Component {

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
            <div className="Contact">
                <NavBar logo={true}/>
                <NavBar logo={false}/>
                <div className="ContactContainer">
                    <h1>Contact Info</h1>

                    <div className="text">
                        <br/>
                        > &nbsp; ./email
                    </div>
                    <div className="text">
                        <a href="mailto:qianhuisun2020@gmail.com">qianhuisun2020@gmail.com</a>
                    </div>

                    <div className="text">
                        <br/>
                        > &nbsp; ./phone 
                    </div>
                    <div className="text">
                        (872) 302-9298
                    </div>

                    <div className="text">
                        <br/>
                        > &nbsp; ./wechat
                    </div>
                    <div className="text">
                        sun18516291197
                    </div>

                    <div className="text">
                        <br/>
                        > &nbsp; ./facebook
                    </div>
                    <div className="text">
                        <a href="https://www.facebook.com/Qianhui1996" target="_blank">Facebook</a>
                    </div>

                    <div className="text">
                        <br/>
                        > &nbsp; ./professional 
                    </div>
                    <div className="text">
                        <a href="https://github.com/qianhuisun" target="_blank">GitHub</a> &nbsp; 
                        <a href="https://www.linkedin.com/in/qianhui-sun-65369816a/" target="_blank">LinkedIn</a>
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

export default Contact;