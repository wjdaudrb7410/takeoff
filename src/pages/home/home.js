import { HelmetTitle } from "../../components/HelmetTitle";

import { useQuery } from "@tanstack/react-query";
import { useCurrentPos } from "../../components/useCurrentPos";
import { BasedOnLocation, ServiceName } from "../../api";

import { MainBanner } from "../../components/MainBanner";
import { Containers } from "../../components/Container";
import { Loading } from "../../components/Loading";

export const Home = () => {
  const { lat, lon } = useCurrentPos();

  const { data: ldata, isLoading: lLoading } = useQuery({
    queryKey: [ServiceName.BasedLocation, lon, lat, 5000, 12],
    queryFn: BasedOnLocation,
  });

  return (
    <>
      <HelmetTitle title={"Home"} />
      <Containers>
        {lLoading ? (
          <Loading />
        ) : (
          <MainBanner data={ldata?.response?.body?.items?.item}></MainBanner>
        )}
      </Containers>
    </>
  );
};
