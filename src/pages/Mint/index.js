import React from 'react'
import "./Mint.css"
import card1Image from "../../assets/HomeImages/NFT Mint/card1image.png"
import { RiTimer2Line } from 'react-icons/ri'
import { AiOutlineEye } from 'react-icons/ai'
const mint = () => {
    return (
        <>
            <section className="mintsection">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1">
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
                <div className='container-fluid'>
                    <div className="section_about">
                        <div className='col-lg-6 pattern_pic'>
                            <div className="cards">
                                <div className="card1">
                                    <div className="card1_pic">
                                        <img src={card1Image} className="card1_pic" alt='not found' />
                                    </div>
                                    <div className="selection-overlay">
                                        <div className="selection-container" style={{ left: '207.54px', top: '1838.56px', width: '270.86px', height: '97.93px' }}>
                                            <div className="timer-color">
                                                <RiTimer2Line className='timer-line' /> <p className='timer-value'>19h:03m:01s</p>   <AiOutlineEye className='eye-icon' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card2">
                                        <div className="card2_pic">

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 p-20 data_section">
                            <h1 className='about_us'>About US</h1>
                            <p className='contrary_to_popular'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature. <br /><br />

                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original a latin professor at Hampden-Sydney</p>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default mint