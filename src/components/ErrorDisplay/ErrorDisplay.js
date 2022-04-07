import React from "react";
import { ErrorContainer, ErrorWrap } from "./ErrorDisplay.styles";

function ErrorDisplay({ errorMessage }) {
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

export default ErrorDisplay;
