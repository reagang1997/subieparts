import { Button, Paper } from "@mui/material";
import React from "react";
import sale from '../../assets/sale2.png';
import rims from '../../assets/rims.png';
import toemi from '../../assets/toemi.png';

import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Check from '@mui/icons-material/Check';

import './style.css'
import { Box } from "@mui/material";
const Home = () => {

    return (
        <div>
            <img id='sale' src={sale} />
            <Button style={{ position: 'relative', bottom: '33px', right: '248px', backgroundColor: 'black' }} variant='contained' size='large'>Shop Now!</Button>
            <br />
            <div className="flex-row">
                <div className="rims-container">
                    <img id='rims' src={rims} />
                </div>
                <div className="toemi">
                    <img id='toemi' src={toemi} />
                </div>
            </div>
            <Paper sx={{ width: 320, backgroundColor: 'lightGrey' }}>
                <MenuList dense>
                    <MenuItem>
                        <ListItemText inset >Single</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemText >1.15</ListItemText>
                    </MenuItem>
                </MenuList>
            </Paper>
        </div>
    )
}

export default Home;