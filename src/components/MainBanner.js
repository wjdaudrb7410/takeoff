import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Mousewheel } from "swiper/modules";
import { Containers } from "./Container";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import "swiper/css/free-mode";
import styled from "styled-components";
import { Header } from "./Header";
import { Jacket } from "./Jacket";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";

const SwiperWrap = styled.div`
  padding: 0 30px;
  width: 380px;
  height: 420px;
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    width: 150px;
    height: 200px;
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @keyframes post-ani {
    25% {
      transform: rotate(2deg) scale(1.01);
    }

    50% {
      transform: rotate(0deg) scale(1);
    }

    75% {
      transform: rotate(-2deg) scale(1.01);
    }
  }
  .swiper-slide:hover {
    opacity: 0.9;
    animation: post-ani 0.8s linear 1;
  }
`;
const ContentWrap = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid transparent;
  border-radius: 20%;
  overflow: hidden;
  box-shadow: 5px 5px 3px #666;
`;
const LocalText = styled.div`
  font-size: 14px;
  padding-top: 20px;
  padding-left: 70px;
  align-self: flex-start;
`;
export const MainBanner = ({ data }) => {
  console.log(data);
  return (
    <>
      <Containers>
        <Header />
        <SearchBar></SearchBar>
        <LocalText>당신 주변에 있는 관광지</LocalText>
        <SwiperWrap>
          <Swiper
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination, Mousewheel]}
            grid={{ rows: 2, fill: "column" }}
            slidesPerView={3}
            mousewheel={true}
          >
            {data &&
              data.map((rsl) => (
                <SwiperSlide key={rsl.contentid}>
                  <ContentWrap>
                    <Link to={`/detail/${rsl.contentid}`}>
                      <Jacket data={rsl}></Jacket>
                    </Link>
                  </ContentWrap>
                </SwiperSlide>
              ))}
          </Swiper>
        </SwiperWrap>
      </Containers>
    </>
  );
};
