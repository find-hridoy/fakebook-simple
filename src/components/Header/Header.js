import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@material-ui/core';
import './Header.css';

const Header = () => {
    //Event Handler
    const btnHandler = () => {
        alert("You can skip this section")
    }
    return (
        <>
            <div className="navbar-area">
                <AppBar position="static">
                    <Container>
                        <Toolbar>
                            <Typography variant="h5" className="">Fakebook</Typography>
                            <div className="nav-items">
                                <Button onClick={btnHandler} color="inherit">Sign up</Button>
                                <Button onClick={btnHandler} color="inherit">Login</Button>
                            </div>
                        </Toolbar>
                    </Container>
                </AppBar>
            </div>
        </>
    );
};

export default Header;