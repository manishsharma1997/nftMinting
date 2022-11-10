import React from 'react'
import { Modal } from 'react-bootstrap'
import { useModal } from '../../../utils/ModalContext'
function DisConnectModal() {
    const {
        showDisConnectModal,
        account,
        balance,
        setDisConnectModal,
        disconnectWalletFromApp
    } = useModal();
    const substr = (str, n) =>{
        return str.length > n ? str.substr(0, n -1)+"..."+str.substr(38,43) : str;
      }
  
  return (
    <Modal size='sm' centered show={showDisConnectModal} onHide={()=>setDisConnectModal(false)}>
        <Modal.Body>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div style={{backgroundColor:'yellowgreen',width:'50px',height:'50px',borderRadius:'50%'}}/>
            </div>
            <div style={{textAlign:"center",marginTop:'5px',fontWeight:'700'}}>{substr(account.toString(),6)}</div>
        </Modal.Body>
        <ul style={{display:'flex',listStyleType:'none',padding:'0px',margin:'10px'}}>
            <li style={{width:'50%',textAlign:'center',backgroundColor:'whitesmoke',marginRight:'10px',padding:'10px'}}>Bal Avl: {balance}</li>
            <li onClick={disconnectWalletFromApp} style={{width:'50%',textAlign:'center',backgroundColor:'whitesmoke',padding:'10px'}}>Disconnect</li>
        </ul>
    </Modal>
  )
}

export default DisConnectModal