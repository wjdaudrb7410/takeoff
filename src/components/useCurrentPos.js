import { useEffect, useState } from "react";

export const useCurrentPos = () => {
  const defaultLat = 37.571211385077554;
  const defaultLon = 126.98111787255725;

  const [lat, setLat] = useState(defaultLat);
  const [lon, setLon] = useState(defaultLon);

  const location = (pos) => {
    const {
      coords: { latitude, longitude },
    } = pos;
    // console.log(latitude, longitude)

    // pos로 객채 형식을 가지고온다.
    // console.log(pos)

    setLat(latitude);
    setLon(longitude);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location);
  }, [lat, lon]);
  // 특정값이 업데이트 되었을대
  //페이지가 렌더링 되었을때 실행하기도함, 렌더링 전 후 실행, 특정값이 변경되었을때 실행됨,
  //페이지가 랜더링 되었을때 한번만 실행,
  // 랜더링 후 실행,
  // 업데이트가 되었을때 실행을 지정함

  return {
    lat,
    lon,
  };
};
