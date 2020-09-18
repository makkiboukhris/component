import React from 'react';
import './App.css';
import Address from './component/profile/Address';
import FullName from './component/profile/FullName';
import ProfilPhoto from './component/profile/ProfilPhoto';

function App() {
  return (
    <div className="App">
    <ProfilPhoto/>
    <FullName/>
    <Address/>
    </div>
  );
}

export default App;
