import { HelmetTitle } from "../../components/HelmetTitle";
import { LogMenu } from "../../components/LogMenu";

export const Signin = () => {
  return (
    <>
      <HelmetTitle title={"Signin"} />
      <LogMenu isLog={false}></LogMenu>
    </>
  );
};
