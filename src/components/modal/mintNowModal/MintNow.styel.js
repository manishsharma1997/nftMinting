import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import modalBg from "../../../assets/images/bg/modal_overlay.png";

const modalAnimation = keyframes`${fadeIn}`;

const MintModalStyleWrapper = styled.div`
  &.modal_overlay {
    position: fixed;
    height: 100%;
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    display: flex;
    justify-content: center;

    &::before {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background: #000;
      content: "";
      opacity: 0.92;
      backdrop-filter: blur(33px);
    }
  }

  .mint_modal_box {
    position: relative;
    width: 440px;
    margin: auto;
    animation: 1s ${modalAnimation}; /* ********* */

    &::before {
      backdrop-filter: blur(5px);
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background: #171c213d;
      content: "";
      border-radius:20px;
      overflow:hidden;
    }
  }

  .mint_modal_content {
    height: 100%;
    width: 100%;
    // background: url(${modalBg});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    padding: 45px;
    padding-bottom: 50px;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    opacity:0.95;
  }

  .modal_header {
    h2 {
      font-family: "MisterVampire";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
      max-width: 280px;
      margin: auto;
      margin-bottom: 26px;
      color:yellow;
    }

    button {
      background: transparent;
      border: none;
      outline: none;
      height: 45px;
      width: 45px;
      position: absolute;
      right: 10px;
      top: 14px;
      overflow: hidden;
      display: flex;
      justify-content: end;
      align-items: baseline;
   border-radius:13px
      svg {
        margin-top: 5px;
        color: #ffffff;
      }

      &:before {
        // content: "";
        background: rgba(255, 255, 255, 0.1);
        height: 150%;
        width: 150%;
        position: absolute;
        right: -35px;
        top: -35px;
        transform: rotate(45deg);
        
      }
    }
  }

  .mint_count_list {
    margin: 30px 0px;
    ul {
      padding: 0;
      margin: 0;
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 56px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);

        h5 {
          font-family: "kartooni";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 19px;
          text-align: right;
          color: #ffffff;
          margin: 0;
          letter-spacing:1.5px
        }

        .mint_quantity_sect {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 106px;
          width: 100%;
          height: 100%;

          button {
            border: none;
            outline: none;
            background: transparent;
            padding: 0px;
            font-family: "Bakbak One";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            text-align: center;
            text-transform: uppercase;
            color: #ffffff;
          }

          input {
            max-width: 58px;
            width: 100%;
            border: none;
            border-left: 1px solid rgba(255, 255, 255, 0.1);
            border-right: 1px solid rgba(255, 255, 255, 0.1);
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            padding: 0px 19px;
            outline: none;
            font-family: "kartooni";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            text-align: center;
            text-transform: uppercase;
            color: #ffffff;
          }
        }
      }
    }
  }

  .modal_mint_btn {
    button {
      width: 100%;
      font-size: 30px;
      letter-spacing: 2px;
      font-family: Kartooni;
      border-radius: 44px;
    }
  }
  .modal_bottom_shape {
    position: absolute;
    bottom: 10px;

    &.shape_left {
      left: 10px;
      transform: rotate(-90deg);
    }
    &.shape_right {
      right: 10px;
      transform: rotate(180deg);
    }
  }
`;

export default MintModalStyleWrapper;