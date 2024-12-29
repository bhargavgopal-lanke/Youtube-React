import React from "react";
import SideBar from "./Sidebar.jsx";
import MainContainer from "./MainContainer.jsx";

const Body = () => {
  return (
    <div className="flex">
      <div className="w-3/12">
        <SideBar />
      </div>
      <div className="w-9/12">
        <MainContainer />
      </div>
    </div>
  );
};

export default Body;
