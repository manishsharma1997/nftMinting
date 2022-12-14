import React from "react";
import "./card.css";
import { Button, Card } from "react-bootstrap";
import heartimg from "../../assets/HomeImages/NFT Mint/Heart@2x.png";
import card1img from "../../assets/HomeImages/NFT Mint/image18.png";
import card2img from "../../assets/HomeImages/NFT Mint/image20.png";
import card3img from "../../assets/HomeImages/NFT Mint/image22.png";
import eyeImage from "../../assets/HomeImages/NFT Mint/Show.png";
import timeImage from "../../assets/HomeImages/NFT Mint/TimeCircle.png";

function card() {
  return (
    <>
      <section className="card_section" id="collection">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="firstpara">
                Amazing and Super Unique Art This Week
              </p>
            </div>
            <div className="col-lg-12">
                <div className="row gy-5 gy-xl-0 gx-0 gx-md-5">
                <div className="col-md-6 col-xl-4">
                    <Card
                    style={{ background: "#353535", maxWidth:"360px", margin: "auto", position: "relative" }}
                    className="cards"
                    >
                    <div className="about_bandge">
                        <img src={heartimg} />
                        <p>140</p>
                    </div>
                    <Card.Img
                        style={{ padding: "22px" }}
                        variant="top"
                        src={card1img}
                    />
                    <Card.Body>
                        <div className="time">
                        <div>
                            <img src={timeImage} />
                            <span style={{ color: "rgba(238,238,238,0.7)" }}>
                            {" "}
                            11h : 03m : 01s
                            </span>
                        </div>
                        <div>
                            <img src={eyeImage} />
                            <span style={{ color: "rgba(238,238,238,0.7)" }}>
                            {" "}
                            500
                            </span>
                        </div>
                        </div>
                        <hr />
                        <div className="time">
                        <div>
                            <h4 style={{ color: "white", fontFamily: "Kartooni" }}>
                            Jourdi#146
                            </h4>{" "}
                            <h5 style={{ color: "yellow", fontFamily: "Kartooni" }}>
                            32.97 ETH
                            </h5>
                        </div>
                        <div>
                            <Button
                            className="cards_btn"
                            style={{
                                background: "yellow",
                                width: "150px",
                                height: "60px",
                                fontFamily: "Kartooni",
                                color: "black",
                                fontSize: "22px"
                            }}
                            variant="primary"
                            >
                            Mint
                            </Button>
                        </div>
                        </div>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 col-xl-4">
                    <Card style={{ background: "#353535", maxWidth:"360px", margin: "auto", }} className="cards">
                    <div className="about_bandge">
                        <img src={heartimg} />
                        <p>100</p>
                    </div>
                    <Card.Img
                        style={{ padding: "22px" }}
                        variant="top"
                        src={card2img}
                    />
                    <Card.Body>
                        <div className="time">
                        <div>
                            <img src={timeImage} />
                            <span style={{ color: "rgba(238,238,238,0.7)" }}>
                            {" "}
                            15h : 05m : 09s
                            </span>
                        </div>
                        <div>
                            <img src={eyeImage} />
                            <span style={{ color: "rgba(238,238,238,0.7)" }}>
                            {" "}
                            250
                            </span>
                        </div>
                        </div>
                        <hr />
                        <div className="time">
                        <div>
                            <h4 style={{ color: "white", fontFamily: "Kartooni" }}>
                            Aurelians
                            </h4>{" "}
                            <h5 style={{ color: "yellow", fontFamily: "Kartooni" }}>
                            30.20 ETH
                            </h5>
                        </div>
                        <div>
                            <Button
                            className="cards_btn"
                            style={{
                                background: "yellow",
                                width: "150px",
                                height: "60px",
                                fontFamily: "Kartooni",
                                color: "black",
                                fontSize: "22px"
                            }}
                            variant="primary"
                            >
                            Mint
                            </Button>
                        </div>
                        </div>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 col-xl-4">
                    <Card style={{ background: "#353535", maxWidth:"360px", margin: "auto", }} className="cards">
                    <div className="about_bandge">
                        <img src={heartimg} />
                        <p>230</p>
                    </div>
                    <Card.Img
                        style={{ padding: "22px" }}
                        variant="top"
                        src={card3img}
                    />
                    <Card.Body>
                        <div className="time">
                        <div>
                            <img src={timeImage} />
                            <span style={{ color: "rgba(238,238,238,0.7)" }}>
                            {" "}
                            14h : 01m : 10s
                            </span>
                        </div>
                        <div>
                            <img src={eyeImage} />
                            <span style={{ color: "rgba(238,238,238,0.7)" }}>
                            {" "}
                            300
                            </span>
                        </div>
                        </div>
                        <hr />
                        <div className="time">
                        <div>
                            <h4 style={{ color: "white", fontFamily: "Kartooni", height: "25px", width:"85px", fontSize:"19.24px",letterSpacing:"0.19px" }}>
                            Casandra
                            </h4>{" "}
                            <h5 style={{ color: "yellow", fontFamily: "Kartooni" }}>
                            39.20 ETH
                            </h5>
                        </div>
                        <div>
                            <Button 
                            className="cards_btn"
                            style={{
                                background: "yellow",
                                width: "150px",
                                height: "60px",
                                fontFamily: "Kartooni",
                                color: "black",
                                fontSize: "22px"
                            }}
                            variant="primary"
                            >
                            Mint
                            </Button>
                        </div>
                        </div>
                    </Card.Body>
                    </Card>
                </div>
                </div>
            </div>    
          </div>
        </div>
      </section>
    </>
  );
}

export default card;
