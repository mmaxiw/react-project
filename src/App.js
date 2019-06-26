import React from 'react';

// Components
import Contact from './components/Contact';
import Header from './components/Header';

import './App.css';


function App() {
  return (
    <div className="App">
      <Header branding={'Contact Manager'} />
      <Contact name="Maxi Wainberg"
        email="xxx@xxx.com"
        phone="000-0000-000"
      />
    </div>
  );
}

export default App;
