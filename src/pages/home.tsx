import { Button, TextField } from '@mui/material';
import { useState, MouseEvent } from 'react';
import { useNavigate } from "react-router-dom";
export default function Home() {
  const [inputValue, setInputValue] = useState('');

  let navigate = useNavigate(); 

  

  const handleInputChange = (event:any) => {
    setInputValue(event.target.value);
  };

  const handleClick = (event: MouseEvent) => {
     let path = 'feedback'; 
    navigate(path);
    console.log('Submit button clicked!');
  };

  return (
    <div className="App">
      <h1>What is Your email address ? </h1>
          <TextField 
            required
            id="outlined-required"
            label="Type Your email"
            defaultValue="Hello World"
            value={inputValue}
            onChange={handleInputChange}
            style={{
              width:400,
              borderColor: "rgb(21, 166, 9)",
             }}
            />
        <br/>
    <Button
          style={{
            borderRadius: 5,
            backgroundColor: "rgb(21, 166, 9)",
            fontSize: "18px"
        }}
          disabled={!inputValue } variant="contained" onClick={handleClick}>Submit</Button>
    </div>
  );
}
