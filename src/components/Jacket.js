import styled from "styled-components";
import { NO_IMG } from "../GlobalStyle";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";

const JacketWrap = styled.div`
  width: 200px;
  height: 300px;
  border-radius: 15px;
  overflow: hidden;
  img {
    width: 200px;
    height: 300px;
    object-fit: cover;
  }
`;

const JacketTitle = styled.div`
  margin-left: 5px;
  font-size: 18px;
`;
const JacketBlur = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: transparent;
  width: 100%;
  height: 20%;
  backdrop-filter: blur(1px);
  bottom: 60px;
`;
const Addr = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-left: 6px;
  font-size: 12px;
  svg {
    margin-right: 3px;
  }
`;
export const Jacket = ({ data }) => {
  return (
    <>
      <JacketWrap>
        <Link to={`/detail/${data.contentid}`}>
          {data?.firstimage ? (
            <img src={data.firstimage} alt={data.title}></img>
          ) : (
            <img src={NO_IMG} alt={data.title}></img>
          )}
          <JacketBlur>
            <JacketTitle>{data.title}</JacketTitle>
            <Addr>
              <BsFillTelephoneFill />
              {data?.tel ? <>: {data?.tel}</> : <>: 대표번호 없음</>}
            </Addr>
          </JacketBlur>
        </Link>
      </JacketWrap>
    </>
  );
};
