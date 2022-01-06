import { Button, Grid, Typography } from '@mui/material';
import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import blkLogo from '../../assets/blk-logo.png';

import './style.css'
const Footer = () => {

    return (
        <div style={{ position: 'absolute', minHeight: '300px', width: '100%' }}>
            <div id='footer'>
                <Grid container>
                    <Grid item md={2}>
                    </Grid>
                    <Grid item md={8}>

                        <Grid container>

                            <Grid item md={4}>
                                <img style={{ height: '35px', marginTop: '15px' }} src={blkLogo} />
                                <br />
                                <Typography variant='body' align='center' style={{ color: 'white' }}>1234 Address</Typography>
                                <br />
                                <Typography variant='body' align='center' style={{ color: 'white' }}>Austin, Texas 73301</Typography>
                                <br />
                                <Typography variant='body' align='center' style={{ color: 'white' }}>(555) - 555 - 5555</Typography>
                            </Grid>
                            <Grid item md={8}>
                                <div style={{ color: 'white', paddingLeft: '50px' }}>
                                    <br />
                                    <div className='flex-row'>
                                        <div style={{width: 'fit-content', margin: 'auto'}}>
                                            <Typography variant='h6' align='center'>My Account</Typography>
                                            <hr style={{ width: '100%' }} />
                                            <div className='flex-col'>
                                                <Typography variant='body' align='center'>My Account</Typography>
                                                <br />
                                                <Typography variant='body' align='center'>Login</Typography>
                                                <br />
                                                <Typography variant='body' align='center'>My Cart</Typography>
                                                <br />
                                                <Typography variant='body' align='center'>Wishlist</Typography>
                                                <br />
                                                <Typography variant='body' align='center'>Checkout</Typography>
                                            </div>
                                        </div>
                                        <div style={{width: 'fit-content', margin: 'auto'}}>
                                            <Typography variant='h6' align='center'>My Account</Typography>
                                            <hr style={{ width: '100%' }} />
                                            <div className='flex-col'>
                                                <Typography variant='body' align='center'>My Account</Typography>
                                                <br />
                                                <Typography variant='body' align='center'>Login</Typography>
                                                <br />
                                                <Typography variant='body' align='center'>My Cart</Typography>
                                                <br />
                                                <Typography variant='body' align='center'>Wishlist</Typography>
                                                <br />
                                                <Typography variant='body' align='center'>Checkout</Typography>
                                            </div>
                                        </div>
                                        <div style={{width: 'fit-content', margin: 'auto'}}>
                                            <Typography variant='h6' align='center'>My Account</Typography>
                                            <hr style={{ width: '100%' }} />
                                            <div className='flex-col'>
                                                <Typography variant='body' align='center'>My Account</Typography>
                                                <br />
                                                <Typography variant='body' align='center'>Login</Typography>
                                                <br />
                                                <Typography variant='body' align='center'>My Cart</Typography>
                                                <br />
                                                <Typography variant='body' align='center'>Wishlist</Typography>
                                                <br />
                                                <Typography variant='body' align='center'>Checkout</Typography>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            
                            


                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer;
