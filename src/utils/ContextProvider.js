import { useState } from "react";
import { ModalContext } from "./ModalContext";
import {
  connectWallet,
  connectWalletLocaly,
  isWalletConnected,
  disconnectWallet,
  getbalance,
  getChainId
} from "../config";
import { totalMintCount, getTransactionCost } from "./mint-nft";

const ContextProvider = ({ children }) => {
  const [visibility, setVisibility] = useState(false);
  const [balance, setBalance] = useState(0);
  const [walletModalvisibility, setModalvisibility] = useState(false);
  const [shareModalVisibility, setShareModalvisibility] = useState(false);
  const [metamaskModalVisibility, setMetamaskModalVisibility] = useState(false);
  const [connectWalletModal, setConnectWalletModal] = useState(false);
  const [account, setAccount] = useState("");
  const [loading, setloading] = useState(false);
  const [showDisConnectModal,setDisConnectModal] = useState(false);
  const [remaining, setRemaining] = useState(0);
  const [cost, setCost] = useState(0);
  const [nwk, setNetwork] = useState("")

  window.ethereum.on('accountsChanged',async function (accounts) {
    setAccount(accounts);
    const b = await getbalance(accounts[0]);
    setBalance(Number(b).toFixed(3));
  })
  window.ethereum.on('chainChanged',(chainId)=>{
    setEthNetwork(parseInt(chainId));
  })
  
  const setEthNetwork = (chainId)=>{
    switch (chainId) {
      case 1: setNetwork("ETH")
        break;
      case 5: setNetwork("GoerliETH")
        break;
      default:
        break;
    }
  }

  const calculateRemainingItems = async () => {
    let totaltMintedItems = await totalMintCount();
    console.log(parseInt(totaltMintedItems._hex,16));
    setRemaining(parseInt(totaltMintedItems._hex,16));
  };

  const getCostTransaction = async () => {
    let txnCost = await getTransactionCost();
    console.log(parseInt(txnCost._hex,16));
    setCost(parseInt(txnCost._hex,16));
  };

  const loader = () => {
    setloading(!loading)
  }

  const mintModalHandle = () => {
    setVisibility(!visibility);
  };
  const walletModalHandle = () => {
    setModalvisibility(!walletModalvisibility);
  };
  const shareModalHandle = (e) => {
    e.preventDefault();
    setShareModalvisibility(!shareModalVisibility);
  };

  const metamaskModalHandle = () => {
    setMetamaskModalVisibility(!metamaskModalVisibility);
  };

  const connectWalletModalHanlde = () => {
    if (!isWalletConnected()) {
      setConnectWalletModal(!connectWalletModal);
    }
  };

  const connectWalletHandle = async () => {
    const accounts = await connectWallet();
    setAccount(accounts);
    const chainId = await getChainId();
    setEthNetwork(chainId);
    if (!isWalletConnected()) {
      connectWalletLocaly();
    }
    isWalletAlreadyConnected();
    setModalvisibility(!walletModalvisibility);
  };

  const isWalletAlreadyConnected = async () => {
    if (isWalletConnected()) {
      const accounts = await connectWallet();
      setAccount(accounts);
      const b = await getbalance(accounts[0]);
      setBalance(Number(b).toFixed(3));
      const chainId = await getChainId();
      setEthNetwork(chainId);
      }
  };

  const disconnectWalletFromApp = () => {
    disconnectWallet();
    setAccount("");
  };



  return (
    <ModalContext.Provider
      value={{
        remaining,
        calculateRemainingItems,
        showDisConnectModal,
        setDisConnectModal,
        visibility,
        setVisibility,
        mintModalHandle,
        walletModalHandle,
        walletModalvisibility,
        shareModalVisibility,
        shareModalHandle,
        metamaskModalVisibility,
        metamaskModalHandle,
        account,
        connectWalletHandle,
        isWalletAlreadyConnected,
        disconnectWalletFromApp,
        connectWalletModalHanlde,
        connectWalletModal,
        loader,
        loading,
        setloading,
        balance,
        setBalance,
        nwk,
        cost, 
        setCost,
        getCostTransaction
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ContextProvider;