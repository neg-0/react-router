import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';

// import MenuIcon from '@mui/icons-material/Menu';

const buttonStyle = {
    backgroundColor: "#f9d208",
    mx: 2,
    fontWeight: "bold",
    '&:hover': {
        backgroundColor: '#fcec9c',
        color: '#3c52b2',
    }
}

export default function Nav() {
    return (
        <nav>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                        <NavLink to="/"><Button sx={buttonStyle}>Home</Button></NavLink>
                        <NavLink to="/products"><Button sx={buttonStyle}>Products</Button></NavLink>
                        <NavLink to="/cart"><Button sx={buttonStyle}>Cart</Button></NavLink>
                    </Toolbar>
                </AppBar>
            </Box>
        </nav>
    );
}