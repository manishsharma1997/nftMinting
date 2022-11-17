import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { FiCopy,FiLogOut } from 'react-icons/fi';
import { useModal } from '../../../utils/ModalContext'
function DisConnectModal() {
    const {
        showDisConnectModal,
        account,
        nwk,
        balance,
        setDisConnectModal,
        disconnectWalletFromApp
    } = useModal();
    const [copied, setCopied] = useState(false);
    const substr = (str, n) =>{
        return str.length > n ? str.substr(0, n -1)+"..."+str.substr(38,43) : str;
    }
    const copyText = ()=>{ 
        navigator.clipboard.writeText(account[0].toString());
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    }
  
  return (
    <Modal size='sm' centered show={showDisConnectModal}  onHide={()=>setDisConnectModal(false)}>
        <Modal.Header style={{height:'0px',background:'#80808014',borderBottom:'#80808014'}} closeButton/>
        <Modal.Body style={{background:'#80808014'}}>
        <div style={{textAlign:"center",marginTop:'5px',letterSpacing:'1px',color:'black',fontFamily:'Kartooni'}}>{substr(account.toString(),6)}</div>
            {/* <div style={{display:'flex',justifyContent:'center',alignItems:'center',color:'white'}}>
                <div style={{backgroundColor:'yellowgreen',width:'50px',height:'50px',borderRadius:'50%'}}/>
            </div> */}
            <div style={{textAlign:"center",marginTop:'5px',letterSpacing:'1px',color:'black',fontFamily:'Kartooni'}}>{balance} {nwk}</div>
        </Modal.Body>
        <div style={{backgroundColor:'#80808014'}} >
        <ul style={{display:'flex',listStyleType:'none',padding:'0px',margin:'10px'}}>
            {/* <li style={{fontFamily: 'Kartooni',width:'50%',textAlign:'center',backgroundColor:'#ffff',marginRight:'10px',padding:'10px',borderRadius:'6px'}}> {balance} {nwk}</li> */}
            <li onClick={copyText} style={{fontFamily: 'Kartooni',width:'50%',textAlign:'center',backgroundColor:'#ffff',marginRight:'10px',padding:'10px',borderRadius:'6px',cursor:'pointer'}}>{copied?'✔️':<FiCopy/>}<br/>{copied?'Copied':'Copy Address'}</li>
            <li onClick={disconnectWalletFromApp} style={{fontFamily: 'Kartooni',textAlign:'center',width:'50%',backgroundColor:'#ffff',padding:'10px',cursor:'pointer',borderRadius:'6px'}}><FiLogOut/><br/>Disconnect</li>
        </ul>
        </div>
    </Modal>
  )
}

export default DisConnectModal