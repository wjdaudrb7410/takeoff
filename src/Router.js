import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Signin } from "./pages/Signin/Signin";
import { Signup } from "./pages/Signup/Signup";
import { Home } from "./pages/home/home";
import { Detail } from "./pages/Detail/Detail";
import { FOF } from "./pages/FOF/FOF";
import { Search } from "./pages/SearchResult/Search";

export const Router = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.Signin} element={<Signin />} />
          <Route path={routes.Signup} element={<Signup />} />
          <Route path={routes.Detail} element={<Detail />} />
          <Route path={routes.FoF} element={<FOF />} />
          <Route path={routes.Search} element={<Search />} />
        </Routes>
      </HashRouter>
    </>
  );
};
