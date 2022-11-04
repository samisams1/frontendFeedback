import { useState, MouseEvent } from 'react';
import { useNavigate } from "react-router-dom";
import Buttonc from '../ components/controls/Button';
import Form from '../ components/controls/useForm';
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
          <Form
          value={inputValue}
          handleInputChange={handleInputChange}
            />
        <br/>
          <Buttonc
           disabled={!inputValue } variant="contained"
          text={"Submit"}
          onClick={handleClick}
          >
          </Buttonc>
    </div>
  );
}
