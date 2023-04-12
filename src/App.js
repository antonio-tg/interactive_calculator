import './App.css';
import freeCodeCampLogo from './images/fcc_primary_large.jpg'
import Button from './components/button.js'
import Screen from './components/screen.js'
import Clear_Button from './components/clear_button';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  
  const add_input = val => {
    setInput(input + val);
  };

  const result = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert ('Please enter values to make calculations')
    }
  }

  return (
    <div className="App">
      <div className='freecodecamp_container'>
        <img
        src={freeCodeCampLogo}
        className='frecodecamp-logo'
        alt='Logo'
        />
      </div>
      <div className='calculator_container'>
        < Screen input ={input}/>
        <div className='row'>
          <Button handle_click={add_input}>1</Button>
          <Button handle_click={add_input}>2</Button>
          <Button handle_click={add_input}>3</Button>
          <Button handle_click={add_input}>+</Button>
        </div>
        <div className='row'>
          <Button handle_click={add_input}>4</Button>
          <Button handle_click={add_input}>5</Button>
          <Button handle_click={add_input}>6</Button>
          <Button handle_click={add_input}>-</Button>
        </div>
        <div className='row'>
          <Button handle_click={add_input}>7</Button>
          <Button handle_click={add_input}>8</Button>
          <Button handle_click={add_input}>9</Button>
          <Button handle_click={add_input}>*</Button>
        </div>
        <div className='row'>
          <Button handle_click={result}>=</Button>
          <Button handle_click={add_input}>0</Button>
          <Button handle_click={add_input}>.</Button>
          <Button handle_click={add_input}>/</Button>
        </div>
        <div className='row'>
         <Clear_Button handle_click={() => setInput('')}>Clear</Clear_Button> 
        </div>
      </div>
    </div>
  );
}

export default App;
