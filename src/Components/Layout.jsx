import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "../store";

const Layout = () => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    </div>
  );
};

export default Layout;
