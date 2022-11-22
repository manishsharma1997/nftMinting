import React from 'react'
import {useModal} from "../../utils/ModalContext";
import { useEffect,useState } from 'react';
import { totalMintCount,setNftCost, getMaxSupply} from '../../utils/mint-nft';
import './home.css'
import homeimage from '../../assets/HomeImages/NFT Mint/monstercutie3_01 [Converted] Copy@2x.png'
import lock from '../../assets/HomeImages/NFT Mint/Lock Copy@2x.png'
import Wallet from '../../assets/HomeImages/NFT Mint/Wallet Copy@2x.png'
import vector from '../../assets/HomeImages/NFT Mint/Group 9 Copy.png'
import { ToastContainer,toast } from 'react-toastify';
// import Spinner from 'react-bootstrap/Spinner';
// import LoadingOverlay from 'react-loading-overlay';
// import FadeLoader from 'react-spinners/FadeLoader';
const Home = () => {
        // const { mintModalHandle, connectWalletModalHanlde, account} = useModal();
        const {mintModalHandle,account,remaining,calculateRemainingItems} = useModal();
//   const [loader,setLoader]=useState(false);
const [total,setTotal] = useState(0);

const data = async () => {
        try {
          const res = await getMaxSupply();
          // let total = (res.data.pin_count-1)/2;
          setTotal(parseInt(res._hex, 16));
          //  console.log((res.data),"axios"); 
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(() => {
        data();
      },[]);

     useEffect(() => {
        calculateRemainingItems();
       
     },[]);
const mintNowHandler = (s)=>{
        if(account){
                mintModalHandle();
        }else{
       toast.error("Plz Connect Your Wallet",{
            position:"top-right",
            autoClose:5000,
            hideProgressBar:false,
            newestOnTop:false,
            closeOnClick:true,
            rtl:false,
            pauseOnFocusLoss:true,
            draggable:true,
            pauseOnHover:true,
            theme:"dark",
        })
        }
}
  

//   setInterval(() => {
//         calculateRemainingItems();
//   }, 1000);
        return (
                <>
                 {/* {loader?
        <Spinner className="spiner" style={{position:'fixed',top:'50%',left:'50%',zIndex:'9999999'}} animation="border" variant="warning" />
    :null
  } */}
                        <section className='homesection' id='home'>
                                <div className='container'>
                                        <div className='row'>
                                                <div className='col-xl-7'>
                                                        <p className='firstp'> CRAZY META 🎯 NFT COLLECTIONS

                                                        </p>
                                                        <p className='p2'>{remaining} / {total} MINTED

                                                        </p>
                                                        <div className='d-flex mt-3 mt-md-5'>
                                                        
                                                                <button className='mintbtn' onClick={mintNowHandler}>Mint Now</button>
                                                                <p className='p3'>Add to Wishlist

                                                                </p>
                                                        </div>
                                                        <br />
                                                        <p className='p4'>MAX 3 NFTS PER WALLET . PRICE 0.09 ETH + GAS <br/>
                                                                MINT IS LIVE<span className='spanp4'> UNTIL 25 APR 04:00H</span>
                                                                <br />
                                                                PRESALE : SOLDOUT</p>
                                                        <div className='d-flex mt-3 mt-md-5 banner-items'>
                                                                <div className=''>
                                                                        <p className='bottom1'>5555</p>
                                                                        <p className='bottom2'>Total Items</p>
                                                                </div>
                                                                <div className='pl-3'>
                                                                        <p className='bottom1'>896</p>
                                                                        <p className='bottom2'>Total Owners</p>
                                                                </div>
                                                                <div className='pl-3'>
                                                                        <p className='bottom1'>0.55</p>
                                                                        <p className='bottom2'>Floor Price (ETH)</p>
                                                                </div>
                                                                <div className='pl-3'>
                                                                        <p className='bottom1'>25.50K</p>
                                                                        <p className='bottom2'>Volume Traded (ETH)

                                                                        </p>
                                                                </div>
                                                        </div>

                                                </div>
                                                <div className='col-xl-5 align-self-end mt-5 mt-xl-0'>

                                                        <img src={homeimage} alt='' className='img-fluid' width="614px"></img>

                                                </div>
                                        </div>
                                </div>

                        </section>
                        <section className='section2'>
                                <div className='container'>
                                        <div className='row'>
                                                <div className='col-8'>
                                                        <div className='d-flex'>
                                                                <img className='lockimg' src={lock} alt=''></img>
                                                                <p className='lockp1'>Encrypted Security

                                                                </p>
                                                                <p className='lockp2'>Our platform has a strict security system that is safe from name theft.</p>
                                                        </div>
                                                </div>
                                                <div className='col-4'>
                                                        <img src={vector} alt=''></img>
                                                </div>
                                                <div className='col-12'>
                                                        <div className='d-flex fast_transaction_div' style={{ marginTop: '50px' }}>
                                                                <div className='col-4 text-end'>
                                                                        <img src={vector} alt=''></img>
                                                                </div>
                                                                <div className='col-8'>
                                                                        <div className='d-flex justify-content-end'>
                                                                                <img className='lockimg' src={Wallet} alt=''></img>
                                                                                <p className='lockp1'>Fast Transaction

                                                                                </p>
                                                                        <p className='lockp4'>We have an easy, fast, and certainly not complicated purchase transaction flow.

                                                                        </p>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                        </section>
                <ToastContainer />
                </>
        )
}

export default Home