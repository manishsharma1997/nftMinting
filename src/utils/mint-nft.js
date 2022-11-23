import contract from "../utils/nftmint.json";
import { ethers } from "ethers";
import { isMetaMaskInstalled, ethereum } from "../config";
import { toast } from "react-toastify";

export const mint = async (mint_amount, setloading) => {
  try {
    if (isMetaMaskInstalled()) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contractAddress = "0x28F7f75d6f5F0C5e35E29891193eBbe922899dbC";
      const nftContract = new ethers.Contract(
        contractAddress,
        contract,
        signer
      );
      let limit = await nftContract.USERLIMIT();
      let walletMints = await nftContract.maxWalletMints( ethereum.selectedAddress);
      let total = parseInt(walletMints) + parseInt(mint_amount);

      if(total  > limit){
        toast.error('Maximum 3 NFT is Allowed', {
                  position: "top-right",
                  autoClose: 4000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                  });
                  return;
              }
      let txnHash = await nftContract.mint(
        ethereum.selectedAddress,
        mint_amount,
        {
          gasLimit: "3000000",
          value: ethers.utils.parseEther((0.03 * mint_amount).toString()),
        }
      );

      toast.info("Minting in Process. It will take some time", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setloading(false);

      console.log(txnHash.hash, "Hash");
      const txReceipt = await provider.waitForTransaction(
        `${txnHash.hash}`,
        1,
        300000
      );
      if (txReceipt && txReceipt.blockNumber) {
        console.log(txReceipt, "receipt");
        return txReceipt;
      }
    }
  } catch (err) {
    toast.error("Transaction Rejected", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
};

export const totalMintCount = async () => {
  if (isMetaMaskInstalled()) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contractAddress = "0x28F7f75d6f5F0C5e35E29891193eBbe922899dbC";
    const nftContract = new ethers.Contract(contractAddress, contract, signer);
    let totalMint = await nftContract.count();
    console.log(totalMint, "totalMintCount");
    return totalMint;
  }
};

export const getTransactionCost = async (mint_amount) => {
  try {
    if (isMetaMaskInstalled()) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contractAddress = "0x28F7f75d6f5F0C5e35E29891193eBbe922899dbC";
      const nftContract = new ethers.Contract(
        contractAddress,
        contract,
        signer
      );
      let getCost = await nftContract.cost();
      let price = ethers.utils.formatEther(getCost);
      return price;
    }
  } catch (error) {
    console.log(error, "Error");
  }
};

export const getMaxSupply = async () => {
  try {
    if(isMetaMaskInstalled()) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contractAddress = "0x28F7f75d6f5F0C5e35E29891193eBbe922899dbC";
      const nftContract = new ethers.Contract(contractAddress, contract, signer);
      let supply = await nftContract.maxSupply();
      console.log(supply,"supply");
      return supply
    }
  } catch (error) {
    console.log(error,"supplyerror");
  }
 
}

