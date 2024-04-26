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
import useKakaoLoader from "../../useKakaoLoader";
import {
  Map,
  MapMarker,
  MapTypeControl,
  ZoomControl,
} from "react-kakao-maps-sdk";

const MainImg = styled.img`
  border-radius: 15px;
  margin-top: 20px;
  width: 400px;
  height: 300px;
  object-fit: cover;
`;
const TextWrap = styled.div`
  width: 400px;
  text-align: left;
`;
const Title = styled.h1`
  font-weight: 500;
  margin-top: 30px;
  font-size: 28px;
`;
const LocTitle = styled.h1`
  font-weight: 500;
  margin: 30px 0;
  font-size: 20px;
`;
const Addr = styled.div`
  font-weight: 300;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  font-size: 16px;
  color: gray;
  opacity: 0.8;
  svg {
    size: 10px;
    margin-right: 5px;
  }
`;
const Desc = styled.p`
  line-height: 28px;
  letter-spacing: 0;
  margin-top: 20px;
  padding: 20px 0;
  font-size: 16px;
  opacity: 0.7;
`;
export const Detail = () => {
  useKakaoLoader();
  const data = useParams();
  const { data: Ddata, isLoading: DLoading } = useQuery({
    queryKey: [ServiceName.Detail, data.id],
    queryFn: ShowDetail,
  });
  return (
    <>
      <HelmetTitle title={"Detail"} />
      {DLoading ? (
        <Containers>
          <Loading />
        </Containers>
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
              {Ddata.response.body.items.item[0].addr1 ? (
                <div>{Ddata.response.body.items.item[0].addr1}</div>
              ) : (
                <div>위치정보 없음</div>
              )}
            </Addr>
            <Addr>
              <BsFillTelephoneFill />
              {Ddata.response.body.items.item[0].tel ? (
                <div>: {Ddata?.response?.body?.items?.item[0]?.tel}</div>
              ) : (
                <div> 대표번호 없음</div>
              )}
            </Addr>
            <Desc>{Ddata.response.body.items.item[0].overview}</Desc>
            <LocTitle>위치</LocTitle>
            <Map
              id="map"
              center={{
                // 지도의 중심좌표
                lat: Ddata.response.body.items.item[0].mapy,
                lng: Ddata.response.body.items.item[0].mapx,
              }}
              style={{
                // 지도의 크기

                borderRadius: "15px",
                margin: "auto",
                width: "100%",
                height: "300px",
              }}
              level={3}
            >
              <MapMarker
                position={{
                  lat: Ddata.response.body.items.item[0].mapy,
                  lng: Ddata.response.body.items.item[0].mapx,
                }}
              />
              <MapTypeControl position={"TOPRIGHT"} />
              <ZoomControl position={"RIGHT"} />
            </Map>
          </TextWrap>
        </Containers>
      )}
    </>
  );
};
