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
  padding: 30px 30px;
  width: 400px;
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
`;
const ContentWrap = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid transparent;
  border-radius: 20%;
  overflow: hidden;
  box-shadow: 5px 5px 3px #666;
`;
export const MainBanner = ({ data }) => {
  console.log(data);
  return (
    <>
      <Containers>
        <Header />
        <SearchBar></SearchBar>
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
