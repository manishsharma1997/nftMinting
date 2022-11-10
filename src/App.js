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
import LoadingOverlay from 'react-loading-overlay';
import FadeLoader from 'react-spinners/FadeLoader';
import DisConnectModal from './components/modal/disConnectModal';
function App() {
  const {visibility,walletModalvisibility, metamaskModalVisibility, connectWalletModal, loading } = useModal();
  return (
    <>
    <DisConnectModal/>
      {visibility && <MintNowModal/>}
      {walletModalvisibility && <WalletModal />}
      {metamaskModalVisibility && <MetamaskModal/> }
      {connectWalletModal && <ConnectWallet/> }
    <LoadingOverlay active={loading} spinner={<FadeLoader color={"#D5F70A"}/>}>
    <Navbar/>
    <Home/>
    </LoadingOverlay>
    <Mint/>
    <Card />
    <Roadmap/>
    <Subscribe/>
    <Footer/>
    </>
  )
}

export default App;