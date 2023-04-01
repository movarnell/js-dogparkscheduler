import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Title from './Components/Title'
import Mainpage from './Components/Mainpage';

function App() {
 
  return (
    <div className="container-fluid">
      <div className="row">
        <Title />
      </div>
      <div className='row'>
        <Mainpage/>
      </div>
    </div>
  );
}

export default App;
