import styled from "styled-components";
import { NO_IMG } from "../GlobalStyle";

const JacketWrap = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;
const JacketBlur = styled.div`
  position: relative;
  width: 100%;
  height: 20%;
  background-color: transparent;
  z-index: 1;
  bottom: 20%;
  backdrop-filter: blur(1px);
  text-align: left;
  div {
    margin-left: 10px;
    color: #eee;
  }
`;
const JacketTitle = styled.div`
  font-size: 10px;
`;
export const Jacket = ({ data }) => {
  return (
    <>
      <JacketWrap>
        {data?.firstimage ? (
          <img src={data.firstimage}></img>
        ) : (
          <img src={NO_IMG}></img>
        )}

        <JacketBlur>
          <JacketTitle>{data.title}</JacketTitle>
        </JacketBlur>
      </JacketWrap>
    </>
  );
};
