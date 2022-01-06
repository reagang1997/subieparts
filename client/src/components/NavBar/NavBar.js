import { Button, Grid, Typography } from '@mui/material';
import React, { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import logoName from '../../assets/logoName.png'
import Cart from '@mui/icons-material/ShoppingCart';



import './style.css'
import { Box } from '@mui/system';
const NavBar = () => {

    const [showWRX, setShowWRX] = useState(false)
    return (
        <div>
            <div style={{ width: '100%', height: '50px' }} />
            <div id="top-nav-container" >
                <Grid container>
                    <Grid item md={2}>
                    </Grid>
                    <Grid item md={8}>

                        <Grid container>

                            <Grid item md={4}>
                                <img id='logo-name' src={logoName} />
                            </Grid>
                            <Grid item md={4}>
                                <div className='search-bar'>
                                    <TextField
                                        style={{ width: '120%', }}
                                        placeholder="Search SubieParts"
                                        InputProps={{
                                            endAdornment: <Button disableElevation variant='contained' type="submit" sx={{ p: '15px', marginRight: '-14px' }} style={{ height: '100%' }} aria-label="search">
                                                Search
                                            </Button>,
                                            style: { height: '40px' }
                                        }}
                                    />
                                </div>
                            </Grid>
                            <Grid item md={2}>
                                <div className='main-nav-icon-btn' style={{ marginLeft: '55px' }}>
                                    <PersonIcon fontSize='large' style={{ width: 'fit-content', margin: 'auto', }} />
                                    <Typography variant='body' align='center' >My Account</Typography>
                                </div>
                            </Grid>
                            <Grid item md={2}>
                                <div className='main-nav-icon-btn'>
                                    <Cart fontSize='large' style={{ width: 'fit-content', margin: 'auto', fontSize: '32px', marginTop: '2px' }} />
                                    <Typography variant='body' align='center' >My Cart</Typography>
                                </div>
                            </Grid>


                        </Grid>
                    </Grid>
                </Grid>

            </div>
            <div className='wrx-bar'>
                <div className='flex-row' style={{ width: '40%', margin: 'auto' }}>
                    <div style={{ width: 'fit-content', margin: 'auto', color: 'white', marginTop: '7px' }} onMouseEnter={e => setShowWRX(true)}>
                        15+ WRX
                    </div>


                    <div style={{ width: 'fit-content', margin: 'auto', color: 'white', marginTop: '7px' }}>
                        15+ WRX STi
                    </div>
                </div>
            </div>
            <Box onMouseLeave={e => setShowWRX(false)} style={showWRX ? {display: 'block',  height: '200px', width: '300px', backgroundColor: 'green', marginLeft: '720px', position: 'relative', zIndex: '2',  } : {display: 'none'}}>

            </Box>
        </div>
    )
}

export default NavBar