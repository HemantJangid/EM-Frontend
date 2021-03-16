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
          <Hex>
            <svg
              width="60"
              height="68"
              viewBox="0 0 60 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M58.4449 50.4227L30 66.8453L1.55516 50.4226L1.55516 17.5774L30 1.15472L58.4449 17.5774L58.4449 50.4227Z"
                stroke={props.color ? props.color : "white"}
                stroke-width="2"
              />
            </svg>
          </Hex>
          <svg
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow"
          >
            <path
              d="M23.1153 8.70711C23.5058 8.31658 23.5058 7.68342 23.1153 7.2929L16.7513 0.928934C16.3608 0.538409 15.7276 0.538409 15.3371 0.928933C14.9466 1.31946 14.9466 1.95262 15.3371 2.34315L20.9939 8L15.3371 13.6569C14.9466 14.0474 14.9466 14.6805 15.3371 15.0711C15.7276 15.4616 16.3608 15.4616 16.7513 15.0711L23.1153 8.70711ZM0.897949 9L22.4081 9L22.4081 7L0.897949 7L0.897949 9Z"
              fill={props.color ? props.color : "white"}
            />
          </svg>
        </div>
        <BtnText>
          <h4 style={{ color: props.color ? props.color : "white" }}>
            {props.text}
          </h4>
        </BtnText>
      </div>
    </BtnContainer>
  );
}

export default Button;
