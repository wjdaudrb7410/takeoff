import { SpinnerCircular } from "spinners-react";

import { Color } from "../GlobalStyle";
import styled from "styled-components";
const SpinnerWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: white;
`;
export const Loading = () => {
  return (
    <>
      <SpinnerWrap>
        <SpinnerCircular
          size={70}
          thickness={120}
          speed={100}
          color={Color.Title}
          secondaryColor="rgba(0, 0, 0, 0.44)"
          style={{ margin: "auto" }}
        />
      </SpinnerWrap>
    </>
  );
};
