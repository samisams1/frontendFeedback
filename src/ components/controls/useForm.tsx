
import { TextField } from "@mui/material"

export default function Form(props:any) {
    const { lable,inputValue, handleInputChange,} = props
        return(
         <TextField
         required
         id="outlined-required"
         label={lable}
         value={inputValue}
         onChange={handleInputChange}
         style={{
           width:400,
           borderColor: "rgb(21, 166, 9)",
          }}
         />
        )
}