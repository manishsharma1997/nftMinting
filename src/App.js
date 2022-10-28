import React from 'react';
import Navbar from './components/navbar'
import Home from '../src/pages/Home'
import Mint from '../src/pages/Mint'
import Card from '../src/pages/Card';
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Mint/>
    <Card />
    </>
  )
}

export default App;
