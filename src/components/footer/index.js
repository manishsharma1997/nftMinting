import React from 'react'
import './footer.css' 
// import logo1 from '../../assets/HomeImages/NFT Mint/logo1.png'
import logo1 from '../../assets/HomeImages/NFT Mint/logo2.png';
const index = () => {
  return (
    <>
    <section className='sectionF'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div>
              {/* <img src={logo1}/> */}
              <img className="navlogo" height={40} src={logo1} alt=''></img>
                        
              <p className='p'> 2022 NFT and Lorem ipsum dollar<br/> sit amet </p>
            </div>
          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default index