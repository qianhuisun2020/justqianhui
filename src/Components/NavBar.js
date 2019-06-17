import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";

import "./NavBar.css"

const styles = {
    root: {
        alignSelf: "stretch",
    },
    appBarLogo: {
        paddingLeft: "13.3%",
        backgroundColor: "#000000",
    },
    appBar: {
        paddingLeft: "13%",
        backgroundColor: "#222222",
    },
    toolBar: {
        flexDirection: "row",
    },
};

class ButtonAppBar extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            dialog: false
        }
    }

    render() {
        var logo = this.props.logo
        const { classes } = this.props; 

        const navLinkStyle = {
            textDecoration: "none",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color: "white",
            alignSelf: 'center',
        };

        if (logo) {
            return (
                <div className={classes.root}>
                    <AppBar className={classes.appBarLogo} position="static">
                        <Toolbar className={classes.toolBar}>
                            <NavLink to='/' style={navLinkStyle}>
                                <h1>JustQianhui</h1>
                            </NavLink>
                        </Toolbar>
                    </AppBar>
                </div>
            );
        }

        return (
            <div className={classes.root}>
                <AppBar className={classes.appBar} position="static">
                    <Toolbar className={classes.toolBar}>
                        <NavLink to='/' style={navLinkStyle} >
                            <Button style={{color:"white", fontSize:"18px"}}>Home</Button>
                        </NavLink>
                        <NavLink to='/portfolio' style={navLinkStyle}>
                            <Button style={{color:"white", fontSize:"18px"}}>Portfolio</Button>
                        </NavLink>
                        <NavLink to='/resume' style={navLinkStyle}>
                            <Button style={{color:"white", fontSize:"18px"}}>Resume</Button>
                        </NavLink>
                        <NavLink to='/contact' style={navLinkStyle}>
                            <Button style={{color:"white", fontSize:"18px"}}>Contact</Button>
                        </NavLink>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(ButtonAppBar);
