import React from 'react';
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Title from './Components/Title'
import Schedule from './Components/Schedule';
import { getList } from './Components/API';

function App() {
 
  getList(setUsers)
  return (
    <div className="container-fluid">
      <div className="row">
        <Title />
      </div>
      <div className='row'>
        <Schedule users={users} />
      </div>
    </div>
  );
}

export default App;
