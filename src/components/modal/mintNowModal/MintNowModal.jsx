import { useState } from "react";
import { useModal } from "../../../utils/ModalContext";
import { FiX } from "react-icons/fi";
import Button from "../../Button/Button1";
import MintModalStyleWrapper from "./MintNow.styel";
import mintImg from "../../../assets/images/icon/mint-img.png";
// import hoverShape from "../../../assets/images/icon/hov_shape_L.svg";
import { totalMintCount, mint ,getTransactionCost, getMaxSupply} from '../../../utils/mint-nft';
import { useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Spinner from 'react-bootstrap/Spinner';
// import SweetAlert from 'sweetalert-react';


const MintNowModal = () => {
      //  <SweetAlert
      //   title="Demo"
      //   text="SweetAlert in React"/>

  const [count, setCount] = useState(1);
  const [message, setMessage] = useState('');
  const [remaining, setRemaining] = useState(0);
  const [Price,setPrice] = useState(0);
  const [total,setTotal] = useState(0);
  // const { mintModalHandle } = useModal();
  // const [loader,setLoader]=useState(false);
  const {mintModalHandle, loader, setloading,calculateRemainingItems} = useModal();
  console.log("HELLO ", setloading);

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



  let totalItems = total;
  let price = Price;

  const increaseCount = () => {
    let next = parseInt(count) + 1;
    if(next > 10){
      setMessage('Maximum minting ammount is 10');
    }else{
      setCount(next);
      setMessage('');
    }
  }

  const dcreaseCount = () => {
    let prev = (parseInt(count) - 1);
    if(prev < 1){
      setMessage('Minimum minting ammount 1.');
    }else{
      setMessage('')
      setCount(prev);
    }
  }

  const onChangeCount = (e) => {
    if (e.target.value == "") {
      setCount(e.target.value);
      setMessage("Minting amount required");
    }else if(isNaN(parseInt(e.target.value))){

    }
     else if (e.target.value > 10) {
      setMessage("Maximum minting amount is 10");
    } else if (e.target.value < 1) {
      setMessage("Minimum minting amount 1.");
    } else{
      setMessage("");
      setCount(parseInt(e.target.value));
    } 
  };
   
  const Cost = async () => {
     let Cprice = await getTransactionCost();
     setPrice(Cprice);
   }



 

  const mintNow = async () => {
    // setLoader(true)
   try {
    if(count >= 10){
      setMessage('Maximum minting ammount is 10');
    }else if(count < 1){
      setMessage('Minimum minting ammount 1.');
    } else{
      let txn = await mint(count,setloading);
      console.log(txn,"txn");
        setloading(false);
        calculateRemainingItems();
           if(txn){
        toast.success('Minted Successfully', {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
    }
   } catch (error) {
    setloading(false);
    console.log(error,"error");
   }
    
  }

  useEffect(() => {
    data();
  },[]);

  useEffect(() => {
    const calculateRemainingItems = async () => {
      let totaltMintedItems = await totalMintCount();
      setRemaining(totalItems - totaltMintedItems);
    }
console.log('554');
    calculateRemainingItems();
    Cost();
  },[totalItems,remaining]);

  return (
    <>
    {/* {loader?
        <Spinner className="spiner" style={{position:'fixed',top:'50%',left:'50%',zIndex:'9999999'}} animation="border" variant="warning" />
    :null
  } */}
      <MintModalStyleWrapper className="modal_overlay">
        <div className="mint_modal_box">
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>Collect YOUR NFT before end</h2>
              <button onClick={() => mintModalHandle()}>
                <FiX style={{color:'white'}}/>
              </button>
            </div>
            <div className="modal_body text-center">
              <div className="mint_img">
                <img src={mintImg} alt="bithu nft mint" style={{height:'150px',borderRadius:'100%'}} />
              </div>
              <div className="mint_count_list">
                <ul>
                  <li>
                    <h5>Remaining</h5>
                    <h5>
                      {remaining}/<span>{total}</span>
                    </h5>
                  </li>
                  <li>
                    <h5>Price</h5>
                    <h5>{Price}</h5>
                  </li>
                  <li>
                    <h5>Quantity</h5>
                    <div className="mint_quantity_sect">
                      <button
                        onClick={dcreaseCount}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        id="quantity"
                        value={count}
                        onChange={onChangeCount}
                      />
                      <button onClick={increaseCount}>+</button>
                    </div>
                    <h5>
                      <span>{ count * price }</span>
                    </h5>
                  </li>
                </ul>
              </div>
              { message && <p style={{color:'yellow'}}>{message}</p>}
              <div className="modal_mint_btn">
                <Button lg variant="mint" onClick={() => {mintNow(); mintModalHandle(); loader(); }} style={{backgroundColor:'yellow'}}>
                  Mint Now
                </Button>
              </div>
            </div>
     
            
            <div className="modal_bottom_shape_wrap">
              <span className="modal_bottom_shape shape_left">
                {/* <img src={hoverShape} alt="bithu nft hover shape" /> */}
              </span>
              <span className="modal_bottom_shape shape_right">
                {/* <img src={hoverShape} alt="bithu nft hover shape" /> */}
              </span>
            </div>
          </div>
        </div>
      </MintModalStyleWrapper>
    </>
  );
};

export default MintNowModal;