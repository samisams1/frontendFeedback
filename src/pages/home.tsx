import { Button, ButtonBase, TextField } from '@mui/material';
import { useState, MouseEvent } from 'react';
import { useNavigate } from "react-router-dom";
import AddRemoveInputField from './admin/addquestion';

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
          label="Type Your answer"
          defaultValue="Hello World"
          value={inputValue} 
          onChange={handleInputChange}
        />
        <br/>
    <Button variant="contained" onClick={handleClick}>Submit</Button>
    <AddRemoveInputField />
    </div>
  );
}
