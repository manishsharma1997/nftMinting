import React from 'react'
import './card.css'
import { Button, Card } from 'react-bootstrap'
import card1img from '../../assets/HomeImages/NFT Mint/image18.png'
import card2img from '../../assets/HomeImages/NFT Mint/image20.png'
import card3img from '../../assets/HomeImages/NFT Mint/image22.png'
import eyeImage from '../../assets/HomeImages/NFT Mint/Show.png' 
import timeImage from '../../assets/HomeImages/NFT Mint/TimeCircle.png' 



function card() {
    return (
        <>
            <section className="homesection" id='collection'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <p className='firstpara'>
                                Amazing and Super Unique Art This Week
                            </p>
                        </div>
                        <div className='cards3'>
                            <div className='cards1'>
                            <Card style={{ background: '#353535' }} className='cards'>
                                <Card.Img style={{padding:'33px'}} variant="top" src={card1img} />
                                <Card.Body style={{marginTop:'-32px'}}>
                                    <div className='time'><div><img src={timeImage}/><span style={{color:'white'}}>11h:03m:01s</span></div><div><img src={eyeImage}/><span style={{color:'white'}}>100</span></div></div>
                                    <hr style={{color:'white'}}/>
                                   <div className='time'> 
                                   <div><h4 style={{color:'white',fontFamily:'Kartooni'}}>Jordi#146</h4> <h5 style={{color:'yellow',fontFamily:'Kartooni'}}>32.97EATH</h5></div>
                                   <div>
                                    <Button style={{background:'yellow',padding:'5px 15px 5px 15px',fontFamily:'Kartooni',color:'black'}} variant="primary">Mint</Button>
                                    </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='cards2'>
                        <Card style={{ background: '#353535' }} className='cards'>
                                <Card.Img style={{padding:'33px'}} variant="top" src={card2img} />
                                <Card.Body style={{marginTop:'-32px'}}>
                                    <div className='time'><div><img src={timeImage}/><span style={{color:'white'}}>11h:03m:01s</span></div><div><img src={eyeImage}/><span style={{color:'white'}}>100</span></div></div>
                                    <hr style={{color:'white'}}/>
                                   <div className='time'> 
                                   <div><h4 style={{color:'white',fontFamily:'Kartooni'}}>Jordi#146</h4> <h5 style={{color:'yellow',fontFamily:'Kartooni'}}>32.97EATH</h5></div>
                                   <div>
                                    <Button style={{background:'yellow',padding:'5px 15px 5px 15px',fontFamily:'Kartooni',color:'black'}} variant="primary">Mint</Button>
                                    </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='cards3a'>
                        <Card style={{ background: '#353535' }} className='cards'>
                                <Card.Img style={{padding:'33px'}} variant="top" src={card3img} />
                                <Card.Body style={{marginTop:'-32px'}}>
                                    <div className='time'><div><img src={timeImage}/><span style={{color:'white'}}>11h:03m:01s</span></div><div><img src={eyeImage}/><span style={{color:'white'}}>100</span></div></div>
                                    <hr style={{color:'white'}}/>
                                   <div className='time'> 
                                   <div><h4 style={{color:'white',fontFamily:'Kartooni'}}>Jordi#146</h4> <h5 style={{color:'yellow',fontFamily:'Kartooni'}}>32.97EATH</h5></div>
                                   <div>
                                    <Button style={{background:'yellow',padding:'5px 15px 5px 15px',fontFamily:'Kartooni',color:'black'}} variant="primary">Mint</Button>
                                    </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default card