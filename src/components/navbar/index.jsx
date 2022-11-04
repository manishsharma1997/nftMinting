import React, { useState } from "react";
import { useModal } from "../../utils/ModalContext";
import "./Header.css";
import { NavLink } from "react-router-dom";
import setting from '../../assets/HomeImages/setting.png'
import logo1 from '../../assets/HomeImages/NFT Mint/logo1.png';
import Button from 'react-bootstrap/Button';
import Button1 from "../Button/Button1";
import Modal from 'react-bootstrap/Modal';
import { isMetaMaskInstalled } from '../../config';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaDiscord, FaWallet } from "react-icons/fa";
import WalletModal from "../modal/walletModal/WalletModal";
const Header = () => {
  const [show, setShow] = useState(false);
  const [general, setGeneral] = useState(false);
  const [style, setStyle] = useState(false)
  const [seo, setSeo] = useState(false)
  const [custom, setCustom] = useState(false)
  const [domainPublish, setDomainPublish] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Gen = () => {
    setGeneral(true)
    setStyle(false)
    setSeo(false)
    setCustom(false)
    setDomainPublish(false)
  }
  const St = () => {
    setGeneral(false)
    setStyle(true)
    setSeo(false)
    setCustom(false)
    setDomainPublish(false)
  }
  const So = () => {
    setGeneral(false)
    setStyle(false)
    setSeo(true)
    setCustom(false)
    setDomainPublish(false)
  }
  const Cus = () => {
    setGeneral(false)
    setStyle(false)
    setSeo(false)
    setCustom(true)
    setDomainPublish(false)
  }
  const Dmpb = () => {
    setGeneral(false)
    setStyle(false)
    setSeo(false)
    setCustom(false)
    setDomainPublish(true)
  }
  
  const { 
    walletModalHandle, 
    metamaskModalHandle, 
    account, 
    isWalletAlreadyConnected, 
    disconnectWalletFromApp } = useModal();

    const substr = (str, n) =>{
      return str.length > n ? str.substr(0, n -1)+"..."+str.substr(38,43) : str;
    }
    const handleWalletConnect = async () =>{
      
      if(!isMetaMaskInstalled()){
        console.log("ghjh");
        metamaskModalHandle();
      }else{
        console.log(walletModalHandle());
        walletModalHandle();
      }
    }
	
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                  <ul className="navbar-nav ">
                    <li className="nav-item">
                      <a className="navbar-brand" href="/">
                        <img className="navlogo" src={logo1} alt=''></img>
                        {/* NFT Genrator */}
                      </a>

                    </li>
                  </ul>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav mb-4  ul">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="#home"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="#about"
                        >
                          About
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="#collection"
                        >
                          Collections
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="#contact">
                          Contact
                        </a>
                      </li>

                      <li className="nav-item ">
                        <a className="nav-link active"
                          aria-current="page"
                          href="#">
                          Search
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link active"
                          aria-current="page"
                          onClick={handleShow}>
                          Settings
                        </a>
                      </li>

                      <li className="nav-item ">
                      { account ?
              <Dropdown>
                <Dropdown.Toggle variant="white" id="dropdown-basic" className="connect_btn">
                  <div style={{backgroundColor: '#D5F70A', padding:'7px', borderRadius: '7px'}}>
                  { substr(account.toString(),6) }
                  </div>
                </Dropdown.Toggle>
          
                <Dropdown.Menu>
                  <Dropdown.Item href="# " onClick={() => disconnectWalletFromApp() }>Disconnect</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              :
              <Button1
                sm
                variant="hovered"
                className="connect_btn"
                onClick={() => handleWalletConnect()}
              >
                <FaWallet />
                Connect
              </Button1>

              }
                      </li>

                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{ marginLeft: 'auto' }}>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="nab">
            <ul className="ull">
              <li onClick={() => Gen()}>Genral</li>
              <li onClick={() => St()}>Style</li>
              <li onClick={() => So()}>SEO</li>
              <li onClick={() => Cus()}>Custom</li>
              <li onClick={() => Dmpb()}>Domain&Publish</li>
            </ul>
          </div>
          {(style == true) ?
            <>
              <p className="mt-4" style={{ paddingLeft: '40px', fontWeight: '600', fontSize: '24px' }}>Style</p>
              <button type="submit" style={{ color: 'white', padding: '5px 20px 5px 20px', background: 'skyblue', marginLeft: '40px', height:'40px', width:'212px', borderRadius: '3px',
                backgroundColor: '#2F66EE' }}>Choose File</button>
            </>
            :
            (general == true) ?
            <>
              <p className="mt-4" style={{ color: 'black', fontSize: '24px', fontWeight: '600', paddingLeft: '40px' }}>General Information</p>
              <p className="pp ">Website ID : 63jhy582444lki</p>
              <p className="pp">Owner ID : 63jhy582444lki</p>
              <p className="pp">Status  : Not Subscribed.</p>
              <div className="d-flex"> <p className="pp">Connected contact : </p><a>Select your contract</a></div>
            </>
            :
            (seo == true) ?
            <>
              <div style={{ marginLeft: '40px' }}>
                <div className="formline1">
                  <div>
                    <p style={{ margin: '0px' }}>Title</p>
                    <input type='text' placeholder="Title"></input></div>
                  <div>
                    <p style={{ margin: '0px' }}>Preview Title</p>
                    <input type='text' placeholder="Preview Title"></input>
                  </div>
                </div>
                <p style={{ marginTop: '20px', marginBottom: '0px' }}>Description</p>
                <input style={{ width: '100%', height: '100px' }} type='text' placeholder="Enter Text"></input>

                <p style={{ marginTop: '20px', marginBottom: '0px' }}>Keywords</p>
                <input style={{ width: '100%' }} type='text' placeholder="Keywords"></input>

                <div className="formline1">
                  <div>
                    <p style={{ margin: '0px' }}>Language</p>
                    <input type='text' placeholder="Language"></input></div>
                  <div>
                    <p style={{ margin: '0px' }}>Robots</p>
                    <input type='text' placeholder="Robots "></input>
                  </div>
                </div>

                <p style={{ marginTop: '20px', marginBottom: '0px' }}>Cannonical Url</p>
                <input style={{ width: '100%' }} type='text' placeholder="Url"></input>

                <button className="btn btn-success mt-3">Save Change</button>
              </div>
            </>
            :
            (custom == true) ?
            <>
            <h3 style={{height: '28px', width: '140px', color: '#000000',marginLeft: '40px', fontSize: '20px', fontWeight: 500, letterSpacing: 0, lineHeight: '22px'}}>Custom Code</h3>
            <p style={{height: '20px', width: '190px', color: '#000000', marginLeft: '40px', fontSize: '14px', fontWeight: 500, letterSpacing: 0, lineHeight: '16px'}}>&lt;head &gt;custom HTML code:</p>
            <textarea type="text" style={{boxSizing: 'border-box', height: '102px', width: '665px', marginLeft: '40px', border: '1px solid #DDDDDD', borderRadius: '6px', backgroundColor: '#FFFFFF'}} placeholder='<script>' />
            <p style={{height: '20px', width: '190px', color: '#000000', marginLeft: '40px',marginTop: '10px', fontSize: '14px', fontWeight: 500, letterSpacing: 0, lineHeight: '16px'}}>&lt;/body &gt;custom HTML code:</p>
            <textarea type="text" style={{boxSizing: 'border-box', height: '102px', width: '665px', marginLeft: '40px', border: '1px solid #DDDDDD', borderRadius: '6px', backgroundColor: '#FFFFFF'}} placeholder='<script>'/>
            <button type="button" style={{ color: 'white', padding: '5px 20px 5px 20px', background: 'skyblue', marginLeft: '40px', height: '40px', width: '212px', borderRadius: '3px',
                backgroundColor: '#2F66EE', marginRight: 'auto', marginTop: '30px' }}>Save Changes</button>
            </>
            :
            (domainPublish == true) ?
            <>
              <p className="mt-4" style={{ paddingLeft: '40px', fontWeight: '600', fontSize: '24px' }}>Custom Domains</p>
              <button type="button" style={{ color: 'white', padding: '5px 20px 5px 20px', background: 'skyblue', marginLeft: '40px', height: '40px', width: '212px', borderRadius: '3px',
                backgroundColor: '#2F66EE' }}>Add Domain</button>

            </>
            :
            <>
              <p className="mt-4" style={{ color: 'black', fontSize: '24px', fontWeight: '600', paddingLeft: '40px' }}>General Information</p>
              <p className="pp ">Website ID : 63jhy582444lki</p>
              <p className="pp">Owner ID : 63jhy582444lki</p>
              <p className="pp">Status  : Not Subscribed.</p>
              <div className="d-flex"> <p className="pp">Connected contact : </p><a>Select your contract</a></div>
            </>
          }
        </Modal.Body>
        <Modal.Footer>

          <Button className="delete" onClick={handleClose}>
            Delete Website
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Header;
