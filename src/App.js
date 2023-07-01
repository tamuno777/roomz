import React from 'react'
import Home from './components/Home/Home'


function App({cart}) {
  return (
    <div className="App">

      <Home cart={cart}/>
    </div>
  );
}

export default App;
