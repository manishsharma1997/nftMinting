import contract from '../utils/nftmint.json';
import { ethers } from 'ethers';
import { isMetaMaskInstalled, ethereum } from '../config';
import {  toast } from 'react-toastify';


export const mint = async (mint_amount,setloading) => {
    try{
    if(isMetaMaskInstalled()){
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contractAddress = "0xF961A85858575D74350AcFEc0c6531DFE1375D37";
        const nftContract = new ethers.Contract(contractAddress, contract, signer);
        let txnHash = await nftContract.mint(ethereum.selectedAddress, mint_amount, {
            gasLimit: "285000",
            value: ethers.utils.parseEther((0.03 * mint_amount).toString())
        })
        toast.info('Minting in Process...', {
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
  
      
     
      console.log(txnHash.hash,"Hash");
      const txReceipt = await provider.waitForTransaction(
        `${txnHash.hash}`,
        1,
        300000
      );
      if (txReceipt && txReceipt.blockNumber) {
        console.log(txReceipt,"receipt");
        return txReceipt;
      }
    }
}
catch(err){
    toast.error('Transaction Rejected', {
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
}

export const totalMintCount = async () => {
    if(isMetaMaskInstalled()){
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contractAddress = "0xF961A85858575D74350AcFEc0c6531DFE1375D37";
        const nftContract = new ethers.Contract(contractAddress, contract, signer);
        let totalMint = await nftContract.count();

        return totalMint;
    }
}