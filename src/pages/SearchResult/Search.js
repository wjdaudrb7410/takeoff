import { useParams } from "react-router-dom";
import { Containers, ErrText } from "../../components/Container";
import { Header } from "../../components/Header";
import { HelmetTitle } from "../../components/HelmetTitle";
import { SearchBars, SearchForm } from "../../components/SearchBar";
import { SearchKey, ServiceName } from "../../api";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { Loading } from "../../components/Loading";
import { IoIosSearch } from "react-icons/io";
import { useForm } from "react-hook-form";
import { ContentWrap } from "../../components/MainBanner";
import { Jacket } from "../../components/Jacket";
import styled from "styled-components";

const KeywordText = styled.p`
  text-align: left;
  padding-left: 20px;
  margin: 10px 0 25px 0px;
  width: 100%;
  font-size: 24px;
  margin: 10px 0;
`;
const SearchErrText = styled.div`
  display: flex;
  opacity: 0.6;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  width: 100%;
  height: 300px;
`;
export const Search = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const Keyword = useParams();
  const [words, SetWord] = useState(Keyword.keyword);
  const [page, SetPage] = useState(1);
  const { data: kdata, isLoading: kLoading } = useQuery({
    queryKey: [ServiceName.searchKeyword, words, page],
    queryFn: SearchKey,
    enabled: !!words,
  });
  const onSubmit = (data) => {
    SetWord();
    SetWord(data.keyword);
    reset();
  };
  return (
    <>
      <HelmetTitle title={"Search"} />
      <Containers>
        <Header />
        <SearchForm onSubmit={handleSubmit(onSubmit)}>
          <IoIosSearch size={30} />
          <SearchBars
            type="text"
            placeholder="무슨 장소든 입력해 보세요"
            {...register("keyword", { required: "검색값을 입력하세요" })}
          ></SearchBars>
          <ErrText>{errors?.keyword?.message}</ErrText>
        </SearchForm>
        <KeywordText>"{words}" 의 검색결과</KeywordText>
        {kLoading ? (
          <Loading />
        ) : kdata?.response?.body?.items?.item ? (
          <ContentWrap>
            {kdata?.response?.body?.items?.item.map((rsl) => (
              <Jacket key={rsl.contentid} data={rsl}></Jacket>
            ))}
          </ContentWrap>
        ) : (
          <SearchErrText>검색결과 없음</SearchErrText>
        )}
      </Containers>
    </>
  );
};
