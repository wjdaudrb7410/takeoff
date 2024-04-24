import { useParams } from "react-router-dom";
import { HelmetTitle } from "../../components/HelmetTitle";
import { useQuery } from "@tanstack/react-query";
import { ServiceName, ShowDetail } from "../../api";
import { Containers } from "../../components/Container";
import styled from "styled-components";
import { NO_IMG } from "../../GlobalStyle";
import { Header } from "../../components/Header";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Loading } from "../../components/Loading";

const MainImg = styled.img`
  margin-top: 20px;
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
  padding: 0 20px;
  width: 400px;
  text-align: left;
`;
const Title = styled.h1`
  font-size: 28px;
`;
const Addr = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  font-size: 16px;
  color: gray;
  opacity: 0.7;
  svg {
    size: 10px;
    margin-right: 5px;
  }
`;
const Desc = styled.p`
  padding: 20px 0;
  font-size: 20px;
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
        <Loading />
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
            <Addr>
              <BsFillTelephoneFill />
              {Ddata.response.body.items.item[0].tel ? (
                <div>: {Ddata?.response?.body?.items?.item[0]?.tel}</div>
              ) : (
                <div>: 전화번호없음</div>
              )}
            </Addr>
            <Desc>{Ddata.response.body.items.item[0].overview}</Desc>
          </TextWrap>
        </Containers>
      )}
    </>
  );
};
