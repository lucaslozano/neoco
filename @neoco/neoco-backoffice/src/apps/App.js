import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthPage, UnAuthPage } from "../pages";
import AuthContext from "../contexts/AuthContext";
import { getRoutes } from "../utils/routes";

const App = ({ headers = [] }) => {
  const { isLoggedIn, user } = useContext(AuthContext);
  const Page = isLoggedIn ? AuthPage : UnAuthPage;
  const [state, setState] = useState({
    authRoutes: [],
    unAuthRoutes: [],
    authRedirect: "",
    unAuthRedirect: "",
  });
  const availableRoutes = state[isLoggedIn ? "authRoutes" : "unAuthRoutes"];
  const redirect = state[isLoggedIn ? "authRedirect" : "unAuthRedirect"];

  useEffect(() => {
    getRoutes({
      headers,
      isLoggedIn,
      user,
    }).then(({ authRoutes, unAuthRoutes }) => {
      const homeAuthRoute = authRoutes.find(({ home = false }) => home);
      const homeUnAuthRoute = unAuthRoutes.find(({ home = false }) => home);
      setState({
        authRoutes,
        unAuthRoutes,
        authRedirect: homeAuthRoute ? homeAuthRoute.path : "/",
        unAuthRedirect: homeUnAuthRoute ? homeUnAuthRoute.path : "/",
      });
    });
  }, []);

  return availableRoutes.length > 0 ? (
    <Router>
      <Page routes={availableRoutes}>
        <Switch>
          {availableRoutes.map((route, key) => (
            <Route key={key} {...route} />
          ))}
          <Redirect to={redirect}></Redirect>
        </Switch>
      </Page>
    </Router>
  ) : (
    <></>
  );
};

export default App;
