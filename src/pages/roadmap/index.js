import React from "react";
import style from "./Roadmap.module.css";
import roadmap1 from '../../assets/HomeImages/NFT Mint/roadmap1.png'
import roadmap2 from '../../assets/HomeImages/NFT Mint/roadmap2.png'
import roadmap3 from '../../assets/HomeImages/NFT Mint/roadmap3.png'
const Roadmap = () => {

  return (
    <>
      <section className={style.section} id="roadmap">
        <div className="container">
          <p className={style.heading}>Roadmap</p>
          <div className="row">

            <div className={`col-lg-6 col-md-6 `}>
              <div className={style.leftcolumn}>
                <div className={style.imagediv}>
                  <img
                    className={style.image1}
                    src={roadmap1}
                    alt=""
                  ></img>
                </div>
                <div></div>
              </div>
            </div>
            <div
              className={`col-lg-6 col-md-6  ${style.borderleftside}`}
            >
              <div className={style.leftcolumn}>
                <div>
                  <div className={` mt-5 ${style.rightheadingdiv}`}>
                    <p className={style.rightheading}>
                      2021
                    </p>
                  </div>
                  <p className={`pt-4 ${style.heading2paragraph}`}>Background Research and Developments<br/>

Team Allocation<br/>

Presale Round 1 Launch<br/>

Presale Round 2 Launch<br/>

Security Audit (Certik Audit) <br/>

IEO Launch (on a Global Exchange)</p>
                </div>
              </div>
            </div>


            <div className={`col-lg-6 col-md-6 ${style.bordermobileview}`}>
              <div className={style.secondrow}>
                <div className={style.secondrowmarkup}>
                  <div className={` mt-5 ${style.heading2div}`}>
                    <p className={style.heading2}>
                      2022 (Mid) &nbsp;
                    </p>
                  </div>
                 
                  {/* <Markup
                            className={`pt-4 ${style.secondheading2paragraph}`}
                            content={item.content}
                          /> */}
                  <p className={`pt-4 ${style.secondheading2paragraph}`}> Major Exchange Listings<br/>

Game of chance Beta release<br/>

Games of skill Beta release<br/>

Gaming platform release<br/>

Online sport store</p>
                </div>
              </div>
            </div>
            <div
              className={`col-lg-6 col-md-6 pt-5  ${style.borderleftside2}`}
            >
              <div className={style.leftcolumn}>
                <div className={style.imagediv}>
                  <img
                    className={style.image1}
                    src={roadmap2}
                    // "/HomeAssests/roadmap1.png"
                    alt=""
                  ></img>
                </div>
                <div></div>
              </div>
            </div>

            <div className={`col-lg-6 col-md-6 `}>
              <div className={style.leftcolumn}>
                <div className={style.imagediv}>
                  <img
                    className={style.image1}
                    src={roadmap3}
                    alt=""
                  ></img>
                </div>
                <div></div>
              </div>
            </div>
            <div
              className={`col-lg-6 col-md-6  ${style.borderleftside}`}
            >
              <div className={style.leftcolumn}>
                <div>
                  <div className={` mt-5 ${style.rightheadingdiv}`}>
                    <p className={style.rightheading}>
                      2021
                    </p>
                  </div>
                  <p className={`pt-4 ${style.heading2paragraph}`}>Background reasearch and developments<br/> Team Allocation<br/> Presale Round 1 Launch<br/> Presale Round 1 Launch</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;