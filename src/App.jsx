// Import React
import React from 'react';

// Import Components
import './App.scss';
import Aos from 'aos';
import Home from './Page/Home/Home';

function App() {

  Aos.init({
        
  });

  return (
    <>
        <Home />
    </>
  );
}

export default App;
