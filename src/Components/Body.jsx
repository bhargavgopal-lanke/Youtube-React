import React from "react";
import SideBar from "./Sidebar.jsx";
import { Outlet } from "react-router";

const Body = () => {
  return (
    <div className="flex">
      <div className="w-2/12">
        <SideBar />
      </div>
      <div className="w-10/12">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
