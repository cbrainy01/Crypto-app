import React from "react";
import { ErrorContainer, ErrorWrap } from "./BitcoinOverview.styles";

function ChartError({ errorMessage }) {
  return (
    <ErrorContainer>
      <ErrorWrap>
        <img
          src="https://static.thenounproject.com/png/675772-200.png"
          alt="sad robot"
        />
        <p>{errorMessage}</p>
      </ErrorWrap>
    </ErrorContainer>
  );
}

export default ChartError;
