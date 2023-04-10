import './App.css';
import freeCodeCampLogo from './images/fcc_primary_large.jpg'

function App() {
  return (
    <div className="App">
      <div className='freecodecamp_container'>
        <img
        src={freeCodeCampLogo}
        className='frecodecamp-logo'
        alt='Logo'
        />
      </div>
    </div>
  );
}

export default App;
