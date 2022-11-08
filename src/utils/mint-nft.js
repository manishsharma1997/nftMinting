import contract from '../utils/nftmint.json';
import { ethers } from 'ethers';
import { isMetaMaskInstalled, ethereum } from '../config';



export const mint = async (mint_amount) => {
    try{
    if(isMetaMaskInstalled()){
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contractAddress = "0xc4c83bD846d58F06E132848Bb86e7B1f2C9Bae0f";
        const nftContract = new ethers.Contract(contractAddress, contract, signer);
        let txnHash = await nftContract.mint(ethereum.selectedAddress, mint_amount, {
            gasLimit: "285000",
            value: ethers.utils.parseEther((0.03 * mint_amount).toString())
        })
        return txnHash
    }
}
catch(err){
    console.log(err);
}
}

export const totalMintCount = async () => {
    if(isMetaMaskInstalled()){
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contractAddress = "0xc4c83bD846d58F06E132848Bb86e7B1f2C9Bae0f";
        const nftContract = new ethers.Contract(contractAddress, contract, signer);
        let totalMint = await nftContract.count();

        return totalMint;
    }
}