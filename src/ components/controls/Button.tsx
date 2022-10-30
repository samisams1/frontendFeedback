import React from 'react'
import { Button as MuiButton, makeStyles } from "@mui/material";



//import { Button } from '@mui/icons-material';

export default function Button(props:any) {

    const { text, size, color, variant, onClick, ...other } = props
    

    return (
        <MuiButton
            variant={variant || "contained"}
            size={size || "large"}
            color={color || "primary"}
            onClick={onClick}
            {...other}
           >
            {text}
        </MuiButton>
    )
}