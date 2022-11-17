import React from 'react'
import './subscribe.css';
import vectorImage from '../../assets/HomeImages/NFT Mint/Group 9 Copy.png'

function Subscribe() {
  return (
    <>
    <section className="subscribesection" id='contact'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className='vector-image'>
                            <img src={vectorImage}  height='18px' width='700px' alt='not found'/>
                    </div>
                    <div className='subscribe-text'>
                        <div className='subscribe-text1'>
                Subscribe and Get Updates Every Week.
                        </div>
                        <div className='subscribe-text2'>
                        We have a blog related to NFT so we can share
                         thoughts and routines on our blog which is updated weekly. 
                        </div>
                    </div>
                   <div className='email-button mt-5'>
                    <input type='text' placeholder='Enter Your Email Address' className='input'/>
                    <button className='button'>Subscribe</button>
                    </div> 
                    <div className='vector-image'>
                            <img src={vectorImage}  height='18px' width='700px' alt='not found'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Subscribe