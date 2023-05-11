import './App.css';
import logo from './images/PD2023.png'
import logo2 from './images/FDI2023.png'

function App() {
  return (
    <div className="App">
      <div className ="partito">
      <img 
          alt="PD NOT FOUND" 
          src={logo}
          className='logoPartito'
        /> 
      </div>
      <div className ="partito">
      <img 
          alt="FDI NOT FOUND" 
          src={logo2}
          className='logoPartito'
        /> 
      </div>
    </div>
  );
}

export default App;
