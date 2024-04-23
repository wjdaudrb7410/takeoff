import styled from "styled-components";
import { NO_IMG } from "../GlobalStyle";

const JacketWrap = styled.div`
  width: 200px;
  img {
    width: 200px;
    height: 300px;
    object-fit: cover;
  }
`;

const JacketTitle = styled.div`
  padding-top: 3px;
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

        <JacketTitle>{data.title}</JacketTitle>
      </JacketWrap>
    </>
  );
};
