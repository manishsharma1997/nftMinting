import React from 'react';
import Navbar from './components/navbar'
import Home from '../src/pages/Home'
import Mint from '../src/pages/Mint'
import Card from '../src/pages/Card';
import Subscribe from '../src/pages/Subscribe';
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Mint/>
    <Card />
    <Subscribe/>
    </>
  )
}

export default App;
