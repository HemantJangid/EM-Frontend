import React from "react";
import styled from "styled-components";
import hex from "../assets/img/design/hex.svg";
import arrow from "../assets/img/design/arrow.svg";

function Button(props) {

    const Hex = styled.div`
      transition: all 100ms linear;
  `;

    const BtnText = styled.div`
  transition: all 100ms linear;
  margin-left: 10px;
  `;

    const BtnContainer = styled.div`
    cursor: pointer;
    &:hover {
      ${Hex} {
          transform: rotate(60deg);

      }
      ${BtnText} {
        margin-left: 15px;
      }
    }
  `;

    return (
        <BtnContainer>
            <div className="em-btn">
                <div className="hex-box">
                    <Hex><img src={hex} alt="Hexagon" /></Hex>
                    <img src={arrow} alt="Arrow" className="arrow" />
                </div>
                <BtnText><h4>{props.text}</h4></BtnText>
            </div>
        </BtnContainer>
    );
}

export default Button;
