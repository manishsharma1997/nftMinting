import { useState } from "react";
import { useModal } from "../../../utils/ModalContext";
import { FiX } from "react-icons/fi";
import Button from "../../Button/Button1";
import MintModalStyleWrapper from "./MintNow.styel";
import mintImg from "../../../assets/images/icon/mint-img.png";
import hoverShape from "../../../assets/images/icon/hov_shape_L.svg";
import { totalMintCount, mint } from '../../../utils/mint-nft';
import { useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import SweetAlert from 'sweetalert-react';
const MintNowModal = () => {
       <SweetAlert
        title="Demo"
        text="SweetAlert in React"/>

  const [count, setCount] = useState(1);
  const [message, setMessage] = useState('');
  const [remaining, setRemaining] = useState(0);
  const { mintModalHandle } = useModal();
  const [loader,setLoader]=useState(false);

  let totalItems = 9999;
  let price = 0.03;

  const increaseCount = () => {
    if(count >= 10){
      setMessage('Maximum minting ammount exceeding!');
    }else{
      setCount(count + 1);
    }
  }

  const dcreaseCount = () => {
    if(count < 1){
      setMessage('Minimum minting ammount 1.');
    }else{
      setMessage('')

      setCount(count - 1);
    }
  }

  const onChnageCount = (val) => {
    console.log(message);
    if(count >= 10){
      setMessage('Maximum minting ammount exceeding!');
    }
    else if(count<10 || count>0){
      setMessage('')
    }

    else if(count < 1){
      setMessage('Minimum minting ammount 1.');
    }else{
      setCount(val);
    }
  }
  const mintNow = async () => {
    setLoader(true)
   
    if(count >= 10){
      setMessage('Maximum minting ammount exceeding!');
    }else if(count < 1){
      setMessage('Minimum minting ammount 1.');
    }else{
      let txn = await mint(count);
      if(txn.length){
        setLoader(false) 
        setMessage('Minted successfully!');
        <SweetAlert
        title="Demo"
        text="SweetAlert in React"/>
      }
    }
  }

  useEffect(() => {
    const calculateRemainingItems = async () => {
      let totaltMintedItems = await totalMintCount();
      setRemaining(totalItems - totaltMintedItems);
    }

    calculateRemainingItems();
  },[totalItems]);

  return (
    <>
    {loader?
        <Spinner className="spiner" style={{position:'fixed',top:'50%',left:'50%',zIndex:'9999999'}} animation="border" variant="warning" />
    :null
  }
      <MintModalStyleWrapper className="modal_overlay">
        <div className="mint_modal_box">
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>Collect YOUR NFT before end</h2>
              <button onClick={() => mintModalHandle()}>
                <FiX />
              </button>
            </div>
            <div className="modal_body text-center">
              <div className="mint_img">
                <img src={mintImg} alt="bithu nft mint" style={{height:'150px'}} />
              </div>
              <div className="mint_count_list">
                <ul>
                  <li>
                    <h5>Remaining</h5>
                    <h5>
                      {remaining}/<span>9999</span>
                    </h5>
                  </li>
                  <li>
                    <h5>Price</h5>
                    <h5>{price} ETH</h5>
                  </li>
                  <li>
                    <h5>Quantity</h5>
                    <div className="mint_quantity_sect">
                      <button
                        onClick={() =>
                          count > 1 ? dcreaseCount() : count
                        }
                      >
                        -
                      </button>
                      <input
                        type="text"
                        id="quantity"
                        value={count}
                        onChange={(e) => onChnageCount(e.target.value)}
                      />
                      <button onClick={() => increaseCount() }>+</button>
                    </div>
                    <h5>
                      <span>{ count * price }</span> ETH
                    </h5>
                  </li>
                </ul>
              </div>
              { message && <p style={{color:'yellow'}}>{message}</p>}
              <div className="modal_mint_btn">
                <Button lg variant="mint" onClick={() => {mintNow();mintModalHandle();setLoader(true);} } style={{backgroundColor:'yellow'}}>
                  Mint Now
                </Button>
              </div>
            </div>

            <div className="modal_bottom_shape_wrap">
              <span className="modal_bottom_shape shape_left">
                <img src={hoverShape} alt="bithu nft hover shape" />
              </span>
              <span className="modal_bottom_shape shape_right">
                <img src={hoverShape} alt="bithu nft hover shape" />
              </span>
            </div>
          </div>
        </div>
      </MintModalStyleWrapper>
    </>
  );
};

export default MintNowModal;