import React from 'react';
import Navbar from './components/navbar'
import Home from "./pages/Home/Home"
import Mint from '../src/pages/Mint'
import Card from '../src/pages/Card';
import Subscribe from '../src/pages/Subscribe';
import Roadmap from './pages/roadmap';
import Footer from './components/footer';
import { useModal } from "./utils/ModalContext";
import MintNowModal from "./components/modal/mintNowModal/MintNowModal";
import WalletModal from "./components/modal/walletModal/WalletModal";
import MetamaskModal from "./components/modal/metamaskModal/MetamaskModal";
import ConnectWallet from "./components/modal/metamask/ConnectWallet";
function App() {
  const {visibility,walletModalvisibility, metamaskModalVisibility, connectWalletModal } = useModal();
  return (
    <>
      {visibility && <MintNowModal/>}
      {walletModalvisibility && <WalletModal />}
      {metamaskModalVisibility && <MetamaskModal/> }
      {connectWalletModal && <ConnectWallet/> }
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