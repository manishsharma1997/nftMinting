import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import setting from '../../assets/HomeImages/setting.png'
import logo1 from '../../assets/HomeImages/NFT Mint/logo1.png';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Header = () => {
  const [show, setShow] = useState(false);
  const [general,setGeneral] =useState(false);
  const [style,setStyle]=useState(false)
  const [seo,setSeo]=useState(false)
  const [custom,setCustom]=useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Gen = ()=>{
    setGeneral(true)
    setStyle(false)
    setSeo(false)
    
  }
  const St = ()=>{
    setGeneral(false)
    setStyle(true)
    setSeo(false)
    
  }
  const So = ()=>{
    setGeneral(false)
    setStyle(false)
    setSeo(true)
    
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
                          <a  className="nav-link active"
                          aria-current="page"
                          href="#">
                            search
                          </a>
                        </li>
                        <li className="nav-item ">
                          <a  className="nav-link active"
                          aria-current="page"
                          onClick={handleShow}>
                            setting
                          </a>
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
          <Modal.Title style={{marginLeft:'auto'}}>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="nab">
            <ul className="ull">
              <li onClick={()=>Gen()}>Genral</li>
              <li onClick={()=>St()}>Style</li>
              <li onClick={()=>So()}>SEO</li>
              <li onClick={()=>setCustom(true)}>Custom</li>
              <li >Domain&Publish</li>
            </ul>
          </div>
          { (style==true)?<>
           <p className="mt-4" style={{paddingLeft:'40px',fontWeight:'600',fontSize:'24px'}}>Style</p>
          <button type="file" style={{color:'white',padding:'5px 20px 5px 20px',background:'skyblue',marginLeft:'40px'}}>Choose File</button></>:
          
          (general==true)?
          <>
          <p className="mt-4" style={{color:'black',fontSize:'24px',fontWeight:'600',paddingLeft:'40px'}}>General Information</p>
          <p className="pp ">Website ID : 63jhy582444lki</p>
          <p className="pp">Owner ID : 63jhy582444lki</p>
          <p className="pp">Status  : Not Subscribed.</p>
         <div className="d-flex"> <p className="pp">Connected contact : </p><a>Select your contract</a></div>
         </>
         :
         (seo==true)?
         <>
         <div style={{marginLeft:'40px'}}>
<div className="formline1">
  <div>
    <p style={{margin:'0px'}}>Title</p>
  <input type='text' placeholder="Title"></input></div>
<div>
<p style={{margin:'0px'}}>Preview Title</p>
  <input type='text' placeholder="Preview Title"></input>
  </div>
</div>
<p style={{marginTop:'20px',marginBottom:'0px'}}>Description</p>
<input style={{width:'100%',height:'100px'}} type='text' placeholder="Enter Text"></input>

<p style={{marginTop:'20px',marginBottom:'0px'}}>Keywords</p>
<input style={{width:'100%'}} type='text' placeholder="Keywords"></input>

<div className="formline1">
  <div>
    <p style={{margin:'0px'}}>Language</p>
  <input type='text' placeholder="Language"></input></div>
<div>
<p style={{margin:'0px'}}>Robots</p>
  <input type='text' placeholder="Robots "></input>
  </div>
</div>

<p style={{marginTop:'20px',marginBottom:'0px'}}>Cannonical Url</p>
<input style={{width:'100%'}} type='text' placeholder="Url"></input>

<button className="btn btn-success mt-3">Save Change</button>
</div>

         </>:
          <>
          <p className="mt-4" style={{color:'black',fontSize:'24px',fontWeight:'600',paddingLeft:'40px'}}>General Information</p>
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