import styled from "styled-components";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
const MainBanners = styled.div`
  width: 100vw;
  height: 800px;
  img {
    object-fit: cover;
  }
`;

export const MainBanner = ({ data }) => {
  console.log(data);
  return (
    <>
      <MainBanners>
        <Swiper>
          {data.map((rsl) => (
            <SwiperSlide key={rsl.contentid} style={{ objectFit: "contain" }}>
              {rsl.firstimage ? (
                <img
                  src={rsl.firstimage}
                  style={{ objectFit: "contain" }}
                ></img>
              ) : (
                <div>이미지 없음</div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </MainBanners>
    </>
  );
};
