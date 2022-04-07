import React from "react";
import { RotatingLines } from "react-loader-spinner";
import { LoaderContainer, LoaderWrap } from "./BitcoinOverview.styles";

function LoaderComponent() {
  return (
    <LoaderContainer>
      <LoaderWrap>
        <RotatingLines />
      </LoaderWrap>
    </LoaderContainer>
  );
}

export default LoaderComponent;
