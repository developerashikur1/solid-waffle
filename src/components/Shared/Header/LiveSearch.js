import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { IconButton, Input } from '@mui/material';
import React from 'react';

const LiveSearch = () =>{
    return(
        <>
            <Input placeholder="Hello world"/>
            <IconButton aria-label="delete" size="large">
                <LocalMallOutlinedIcon fontSize="inherit" />
            </IconButton>
        </>
    )
};

export default LiveSearch;
