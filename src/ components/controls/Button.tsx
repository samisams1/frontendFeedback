import React from 'react'
import { Button as MuiButton } from "@mui/material";


export default function Button(props:any) {

    const { text, size, color, variant, onClick, ...other } = props
    

    return (
        <MuiButton
        style={{
            borderRadius: 5,
            backgroundColor: "rgb(21, 166, 9)",
            fontSize: "18px"
        }}
        
            variant={variant || "contained"}
            size={size || "large"}
            onClick={onClick}
            {...other}
           >
            {text}
        </MuiButton>
    )
}