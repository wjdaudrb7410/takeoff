import { Link } from "react-router-dom";
import { HelmetTitle } from "../../components/HelmetTitle";
import { routes } from "../../routes";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useCurrentPos } from "../../components/useCurrentPos";
import { BasedOnLocation, ServiceName } from "../../api";

export const Home = () => {
  const { lat, lon } = useCurrentPos();
  const [fdata, SetData] = useState();
  const { data, isLoading } = useQuery({
    queryKey: [ServiceName.BasedLocation, lon, lat, 2000, 12],
    queryFn: BasedOnLocation,
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  useEffect(() => {
    console.log(data);
    SetData(data);
    console.log(fdata);
  }, []);
  return (
    <>
      <HelmetTitle title={"Home"} />
      홈페이지임
      <button>
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
    </>
  );
};
