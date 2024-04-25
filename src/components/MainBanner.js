import styled from "styled-components";
import { Header } from "./Header";
import { Jacket } from "./Jacket";
import { SearchBar } from "./SearchBar";

export const ContentWrap = styled.div`
  margin: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  column-gap: 10px;
  padding-bottom: 150px;
`;
const LocalText = styled.div`
  margin: 20px;
  font-size: 24px;
  font-weight: 600;

  align-self: flex-start;
`;
export const MainBanner = ({ data }) => {
  return (
    <>
      <Header />
      <LocalText>가고싶은곳이 있으신가요?</LocalText>
      <SearchBar></SearchBar>

      <ContentWrap>
        {data?.map((rsl) => (
          <Jacket key={rsl.contentid} data={rsl}></Jacket>
        ))}
      </ContentWrap>
    </>
  );
};
