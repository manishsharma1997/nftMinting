import React from 'react'
import "./Mint.css"
import card2 from '../../assets/HomeImages/NFT Mint/img123.png'
import heartimg from '../../assets/HomeImages/NFT Mint/Heart@2x.png'
import card1Image from "../../assets/HomeImages/NFT Mint/card1image.png"
import { Button, Card } from 'react-bootstrap'
import card3img from '../../assets/HomeImages/NFT Mint/image22.png'
import eyeImage from '../../assets/HomeImages/NFT Mint/Show.png' 
import timeImage from '../../assets/HomeImages/NFT Mint/TimeCircle.png' 
import Spinner from 'react-bootstrap/Spinner';
const mint = () => {
    return (
        <>
      
            <section className="mintsection">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="how-to-mint">HOW TO MiNT</h1>
                            <div className="aftermint">
                                <div className="connect_wallet">
                                    <div className="numbers">
                                        <span className='one'>1</span>
                                    </div>
                                    <div className="alphabets">
                                        <h1 className='connect_your_wallet'>Connect Your Wallet</h1>
                                    </div>
                                </div>
                                <div className="connect_wallet">
                                    <div className="numbers">
                                        <span className='two'>2</span>
                                    </div>
                                    <div className="alphabets">
                                        <h1 className='select_your_quantity'>Select Your Quantity</h1>
                                    </div>
                                </div>
                                <div className="connect_wallet">
                                    <div className="numbers">
                                        <span className='three'>3</span>
                                    </div>
                                    <div className="alphabets">
                                        <h1 className='confirm-the-transaction'>Confirm the Transaction</h1>
                                    </div>
                                </div>
                                <div className="connect_wallet">
                                    <div className="numbers">
                                        <span className='four'>4</span>
                                    </div>
                                    <div className="alphabets">
                                        <h1 className='connect_your_wallet'>Receive your NFTs</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className="section_about"  id='about'>
                        <div className='row'>
                        <div className='col-12 col-lg-6 pattern_pic'>
                            <div className="mint_cards">
                                <div className="card_outer">
                               <div className='card123'>
                                      <Card className='cards about_card'>
                                      <div className="about_bandge" >
                                                <img src={heartimg}/>
                                                <p>100</p>
                                            </div>
                                <Card.Img style={{padding:'25px'}} variant="top" src={card2} />
                                <Card.Body style={{marginTop:'-32px'}}>
                                    <div className='time'><div><img src={timeImage}/><span style={{color:'white',marginRight:'5px'}}>{' '}11h : 03m : 01s</span></div><div><img src={eyeImage}/><span style={{color:'white'}}>{' '}500</span></div></div>
                                    <hr style={{color:'white'}}/>
                                   <div className='time'> 
                                   <div><h4 >Muthadi</h4> <h5>30.20ETH</h5></div>
                                   <div>
                                    <Button className='card_btn' style={{background:'yellow',padding:'8px 18px',fontFamily:'Kartooni',color:'black'}} variant="primary">Buy Now</Button>
                                    </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            </div>
                            <div className='card1234'>
                                      <Card style={{ boxShadow: 'rgb(0 0 0) 70.33px 50.33px 90.66px 0px' }} className='cards about_card'>
                                            <div className="about_bandge" >
                                                <img src={heartimg}/>
                                                <p>120</p>
                                            </div>
                                <Card.Img style={{padding:'25px'}} variant="top" src={card1Image} />
                                
                                <Card.Body style={{marginTop:'-32px'}}>
                                    <div className='time'><div><img src={timeImage}/><span style={{color:'white'}}>{' '}11h : 03m : 01s</span></div><div><img src={eyeImage}/><span style={{color:'white'}}>{' '}400</span></div></div>
                                    <hr style={{color:'white'}}/>
                                   <div className='time'> 
                                   <div><h4 >Muthadi</h4> <h5 >34.97ETH</h5></div>
                                   <div>
                                    <Button className='card_btn' style={{background:'yellow',padding:'10px 20px',fontFamily:'Kartooni',color:'black'}} variant="primary">Buy Now</Button>
                                    </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 data_section" >
                            <h1 className='about_us'>About US</h1>
                            <p className='contrary_to_popular'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature. <br /><br />

                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original a latin professor at Hampden-Sydney</p>
                        </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default mint