import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const ServiceName = {
  searchKeyword: "searchKeyword1",
};
const instance = axios.create({
  baseURL: "http://apis.data.go.kr/B551011/KorService1/",
  params: {
    MobileApp: "takeoff",
    MobileOS: "AND",
    _type: "json",
    serviceKey:
      "rttG9a1Dj2klKr79AV6w8N0hvz4BqTmbcw6NLbhRDJLCmOfQjIMRQ0NOaz2cc6D/Z0fl3rfx7qeufIHgca4qjA==",
  },
});
export const BasedOnLocation = ({ queryKey }) => {};
export const SearchKey = ({ queryKey }) => {
  const [Service, Keyword, pages] = queryKey;
  return instance
    .get(`${Service}?keyword=${Keyword}&pageNo${pages}`)
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
