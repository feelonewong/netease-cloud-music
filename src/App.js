import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { HashRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import routers from "./router";
import store from "@/store";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";
export default memo(function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <AppHeader />
          <Switch>{renderRoutes(routers)}</Switch>
          <AppFooter />
        </Router>
      </Provider>
    </>
  );
});
