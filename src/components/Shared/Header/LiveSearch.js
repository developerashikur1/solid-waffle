import { SearchOutlined } from '@mui/icons-material';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Avatar, Box, IconButton, InputBase, Typography } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import React from 'react';

const LiveSearch = () =>{
    return(
        <>
            <Box sx={{display:'flex', alignItems:'center'}}>
                <Box sx={{display:'flex', alignItems:'center'}}>
                    <InputBase
                        sx={{borderBottom:'1px solid lightGreen', color:'white', width:'100%',mr:-4}} 
                        placeholder="Hello world"
                        color="success"
                    />
                    <SearchOutlined sx={{ color:'lightgreen'}} />
                </Box>
                <Box sx={{display:'flex', alignItems:'center', ml:3}}>
                    <Avatar sx={{ bgcolor: deepPurple[500] , width:30, height:30}}>A</Avatar>
                    <Typography sx={{color:'green'}} gutterBottom component="div" variant="h6" fontSize={14} fontWeight={400}>
                        Log In
                    </Typography>
                </Box>
                <IconButton aria-label="delete" size="large">
                    <LocalMallOutlinedIcon fontSize="inherit" />
                </IconButton>
            </Box>
        </>
    )
};

export default LiveSearch;
