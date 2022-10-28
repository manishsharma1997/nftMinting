import React from 'react'
import './card.css'
import { Button, Card } from 'react-bootstrap'
import card1img from '../../assets/HomeImages/NFT Mint/image18.png'
import card2img from '../../assets/HomeImages/NFT Mint/image20.png'
import card3img from '../../assets/HomeImages/NFT Mint/image22.png'


function card() {
    return (
        <>
            <section className="homesection">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <p className='firstpara'>
                                Amazing and Super Unique Art This Week
                            </p>
                        </div>
                        <div className='cards3'>
                            <div className='cards1'>
                            <Card style={{ width: '20rem' }} className='cards'>
                                <Card.Img variant="top" src={card1img} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='cards2'>
                            <Card style={{ width: '20rem' }} className='cards'>
                                <Card.Img variant="top" src={card2img} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='cards3a'>
                            <Card style={{ width: '20rem' }} className='cards'>
                                <Card.Img variant="top" src={card3img} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
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