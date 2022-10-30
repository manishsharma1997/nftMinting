import React from "react";
import style from "./Roadmap.module.css";
import roadmap from '../../assets/HomeImages/NFT Mint/roadmap.png'
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
                    src={roadmap}
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
                  <p className={`pt-4 ${style.heading2paragraph}`}>Background reasearch and developments Team Allocation Presale Round 1 Launch Presale Round 1 Launch</p>
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
                  <p className={`pt-4 ${style.secondheading2paragraph}`}> Background reasearch and developments Team Allocation Presale Round 1 Launch Presale Round 1 Launch</p>
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
                    src={roadmap}
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
                    src={roadmap}
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
                  <p className={`pt-4 ${style.heading2paragraph}`}>Background reasearch and developments Team Allocation Presale Round 1 Launch Presale Round 1 Launch</p>
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