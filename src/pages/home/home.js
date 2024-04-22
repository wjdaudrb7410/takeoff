import { Link } from "react-router-dom";
import { HelmetTitle } from "../../components/HelmetTitle";
import { routes } from "../../routes";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useCurrentPos } from "../../components/useCurrentPos";
import { BasedOnLocation, SearchKey, ServiceName } from "../../api";
import styled from "styled-components";

import { MainBanner } from "../../components/MainBanner";

export const Home = () => {
  const [page, SetPage] = useState(1);
  const [keyword, SetKeyword] = useState("");
  const { lat, lon } = useCurrentPos();
  const [fdata, SetData] = useState();
  const { data: sdata, isLoading: sLoading } = useQuery({
    queryKey: [ServiceName.searchKeyword, keyword, page],
    queryFn: SearchKey,
    enabled: !!keyword,
  });
  const { data: ldata, isLoading: lLoading } = useQuery({
    queryKey: [ServiceName.BasedLocation, lon, lat, 5000, 12],
    queryFn: BasedOnLocation,
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    SetKeyword(data.search);
    console.log(sLoading);
    console.log(sdata);
    console.log(sLoading);
    reset();
  };
  return (
    <>
      <HelmetTitle title={"Home"} />
      {lLoading ? (
        <div>로딩중</div>
      ) : (
        <MainBanner data={ldata.response.body.items.item}></MainBanner>
      )}
    </>
  );
};
{
  /* <button>
        <Link to={routes.Signin}>사인인</Link>
      </button>
      <form
        style={{ width: "300px", height: "300px" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="검색"
          {...register("search", { required: "검색할 키워드를 입력하세요" })}
        />
        <input type="submit" />
      </form>
      {lLoading ? (
        <div>로딩중</div>
      ) : (
        <div>
          {ldata.response.body.items.item.map((rsl) => (
            <div key={rsl.contentid}>{rsl.addr1}</div>
          ))}
        </div>
      )}
      {sLoading ? (
        <div>검색중</div>
      ) : (
        <div>
          <div>키워드 검색</div>
          {sdata ? (
            sdata?.response.body.items.item.map((rsl) => (
              <div key={rsl.contentid}>{rsl.addr1}</div>
            ))
          ) : (
            <div>검색결과 없음</div>
          )}
        </div>
      )} */
}
