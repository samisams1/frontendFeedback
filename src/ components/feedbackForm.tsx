import { useState, MouseEvent } from 'react';
import { useNavigate } from "react-router-dom";

export default function App() {
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
      <h1>Hello World</h1>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
