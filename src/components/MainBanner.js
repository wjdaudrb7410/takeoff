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

const ContentWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 20px;
`;
const LocalText = styled.div`
  font-size: 24px;
`;
export const MainBanner = ({ data }) => {
  console.log(data);
  return (
    <>
      <Containers>
        <Header />
        <LocalText>당신 주변에 있는 관광지</LocalText>
        <SearchBar></SearchBar>
        <ContentWrap>
          {data.map((rsl) => (
            <Jacket key={rsl.contentid} data={rsl}></Jacket>
          ))}
        </ContentWrap>
      </Containers>
    </>
  );
};
