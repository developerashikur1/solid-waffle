import { Box, Fade, Grid, Tooltip, Typography } from '@mui/material';
import React from 'react';
import Bg1 from '../../../static-images/home-bg-1.jpg';
import Logo from '../../../static-images/logo.png';
import LiveSearch from './LiveSearch';

const Header = () =>{
    return(
        <>
            <Box style={{background:`url(${Bg1})`}}>

                {/* responsive for Desktop mode only */}
                <Grid container spacing={0}>
                
                {/* Logo grid */}
                    <Grid item xs={3} sm={1.5}>
                        <Tooltip title="Gym Xtore" arrow TransitionComponent={Fade} TransitionProps={{timeout:800}}>
                            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyItems:'center'}}>
                                <img style={{width:'62px'}} src={Logo} alt=''/>
                                <Typography sx={{color:'green'}} gutterBottom component="div" variant="h6" fontSize={14} fontWeight={400}>
                                    Gym Xtore
                                </Typography>
                            </Box>
                        </Tooltip>
                    </Grid>

                    {/* Menu grid */}
                    <Grid item xs={19} md={10.5}>
                        <Box>
                            <Box>
                                <LiveSearch/>
                            </Box>
                            
                            <Box>
                                
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Header;