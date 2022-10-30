import React from 'react';
import Navbar from './components/navbar'
import Home from '../src/pages/Home'
import Mint from '../src/pages/Mint'
import Card from '../src/pages/Card';
import Subscribe from '../src/pages/Subscribe';
import Roadmap from './pages/roadmap';
import Footer from './components/footer'
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Mint/>
    <Card />
    <Roadmap/>
    <Subscribe/>
    <Footer/>
    </>
  )
}

export default App;
