import styled from "styled-components";
import { NO_IMG } from "../GlobalStyle";
import { Link } from "react-router-dom";

const JacketWrap = styled.div`
  width: 200px;
`;

const JacketTitle = styled.div`
  margin-left: 5px;
  font-size: 16px;
`;
const JacketBlur = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
  width: 100%;
  height: 20%;
`;
const Addr = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-left: 6px;
  font-size: 12px;
`;
const ImgWrapper = styled.div`
  width: 200px;
  height: 140px;
  border-radius: 12px;
  overflow: hidden;

  img {
    width: 100%;
    height: 140px;
    object-fit: cover;
  }
`;
export const Jacket = ({ data }) => {
  return (
    <>
      <JacketWrap>
        <Link to={`/detail/${data.contentid}`}>
          {data?.firstimage ? (
            <ImgWrapper>
              <img src={data.firstimage} alt={data.title}></img>
            </ImgWrapper>
          ) : (
            <ImgWrapper>
              <img src={NO_IMG} alt={data.title}></img>
            </ImgWrapper>
          )}

          <JacketTitle>{data.title}</JacketTitle>
        </Link>
      </JacketWrap>
    </>
  );
};
