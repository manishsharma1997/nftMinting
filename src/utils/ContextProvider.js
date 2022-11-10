import { useState } from "react";
import { ModalContext } from "./ModalContext";
import {
  connectWallet,
  connectWalletLocaly,
  isWalletConnected,
  disconnectWallet,
  getbalance
} from "../config";
import { totalMintCount } from "./mint-nft";

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

  window.ethereum.on('accountsChanged',async function (accounts) {
    setAccount(accounts);
    const b = await getbalance(accounts[0]);
    setBalance(Number(b).toFixed(3));
  })

  const calculateRemainingItems = async () => {
    let totaltMintedItems = await totalMintCount();
    console.log(parseInt(totaltMintedItems._hex,16));
    setRemaining(parseInt(totaltMintedItems._hex,16));
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
        setBalance
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ContextProvider;