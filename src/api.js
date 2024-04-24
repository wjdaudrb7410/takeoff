import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//관광타입(12:관광지,
// 14:문화시설,
// 15:축제공연행사,
// 25:여행코스,
// 28:레포츠,
// 32:숙박,
// 38:쇼핑,
// 39:음식점) ID
export const ServiceName = {
  searchKeyword: "searchKeyword1",
  BasedLocation: "locationBasedList1",
  Detail: "detailCommon1",
};
const instance = axios.create({
  baseURL: "https://apis.data.go.kr/B551011/KorService1/",
  params: {
    MobileApp: "takeoff",
    MobileOS: "AND",
    _type: "json",
    serviceKey:
      "rttG9a1Dj2klKr79AV6w8N0hvz4BqTmbcw6NLbhRDJLCmOfQjIMRQ0NOaz2cc6D/Z0fl3rfx7qeufIHgca4qjA==",
  },
});
export const BasedOnLocation = ({ queryKey }) => {
  //x가 경도 y가 위도
  const [Service, mapX, mapY, radius, contentType] = queryKey;
  if (contentType) {
    return instance
      .get(
        `${Service}?mapX=${mapX}&mapY=${mapY}&radius=${radius}&contentTypeId=${contentType}`
      )
      .then((res) => res.data);
  } else {
    return instance
      .get(`${Service}?mapX=${mapX}&mapY=${mapY}&radius=${radius}`)
      .then((res) => res.data);
  }
};
export const SearchKey = ({ queryKey }) => {
  const [Service, Keyword, pages] = queryKey;

  return instance
    .get(`${Service}?keyword=${Keyword}&pageNo=${pages}`)
    .then((res) => res.data);
};
export const ShowDetail = ({ queryKey }) => {
  const [Service, contentid] = queryKey;
  return instance
    .get(
      `${Service}?contentId=${contentid}&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&addrinfoYN=Y&overviewYN=Y&mapinfoYN=Y`
    )
    .then((res) => res.data);
};
// function App() {
//   const { data, isLoading } = useQuery({
//     queryKey: [ServiceName.searchKeyword, "떡볶이"],
//     queryFn: GetData,
//   });
//   console.log(data?.response?.body);

//   return <></>;
// }

// export default App;
