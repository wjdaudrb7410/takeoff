import { Link } from "react-router-dom";
import { HelmetTitle } from "../../components/HelmetTitle";
import { routes } from "../../routes";

export const Home = () => {
  return (
    <>
      <HelmetTitle title={"Home"} />
      홈페이지임
      <button>
        <Link to={routes.Signin}>사인인</Link>
      </button>
    </>
  );
};
