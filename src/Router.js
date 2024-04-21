import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Signin } from "./pages/Signin/Signin";
import { Signup } from "./pages/Signup/Signup";
import { Home } from "./pages/home/home";

export const Router = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.Signin} element={<Signin />} />
          <Route path={routes.Signup} element={<Signup />} />
        </Routes>
      </HashRouter>
    </>
  );
};
