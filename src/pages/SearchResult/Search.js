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
  font-size: 14px;
  margin: 10px 0;
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
  console.log(kdata);
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
          <IoIosSearch size={30} color="gray" />
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
        ) : (
          <ContentWrap>
            {kdata?.response?.body?.items?.item.map((rsl) => (
              <Jacket key={rsl.contentid} data={rsl}></Jacket>
            ))}
          </ContentWrap>
        )}
      </Containers>
    </>
  );
};
