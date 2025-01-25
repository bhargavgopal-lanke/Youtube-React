import React from "react";
import SideBar from "./Sidebar.jsx";
import { Outlet } from "react-router";

const Body = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
