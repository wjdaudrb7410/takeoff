import { useParams } from "react-router-dom";
import { HelmetTitle } from "../../components/HelmetTitle";
import { useQuery } from "@tanstack/react-query";
import { ServiceName, ShowDetail } from "../../api";
import { Containers } from "../../components/Container";
import styled from "styled-components";
import { NO_IMG } from "../../GlobalStyle";
import { Header } from "../../components/Header";
import { FaLocationDot } from "react-icons/fa6";

const MainImg = styled.img`
  position: relative;
  top: -80px;
  width: 400px;
  height: 300px;
  object-fit: cover;
  mask-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 68%,
    rgba(255, 255, 255, 0) 100%
  );
`;
const TextWrap = styled.div`
  margin-top: -50px;
  padding: 0 20px;
  width: 400px;
  text-align: left;
`;
const Title = styled.h1`
  font-size: 24px;
`;
const Addr = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  font-size: 12px;
  color: gray;
  opacity: 0.7;
  svg {
    size: 10px;
  }
`;
const Desc = styled.div`
  padding: 20px 0;
  font-size: 12px;
  opacity: 0.7;
`;
export const Detail = () => {
  const data = useParams();
  const { data: Ddata, isLoading: DLoading } = useQuery({
    queryKey: [ServiceName.Detail, data.id],
    queryFn: ShowDetail,
  });
  return (
    <>
      <HelmetTitle title={"Detail"} />
      {DLoading ? (
        <div>로딩중</div>
      ) : (
        <Containers>
          <Header />
          {Ddata.response.body.items.item[0].firstimage ? (
            <MainImg
              src={Ddata.response.body.items.item[0].firstimage}
            ></MainImg>
          ) : (
            <MainImg src={NO_IMG}></MainImg>
          )}
          <TextWrap>
            <Title>{Ddata.response.body.items.item[0].title}</Title>
            <Addr>
              <FaLocationDot />
              <div>{Ddata.response.body.items.item[0].addr1}</div>
            </Addr>
            <Desc>{Ddata.response.body.items.item[0].overview}</Desc>
          </TextWrap>
        </Containers>
      )}
    </>
  );
};
