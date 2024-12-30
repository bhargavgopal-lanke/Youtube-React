import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const state = useSelector((store) => store?.appInfo?.toggle);
  console.log("state", state);
  return (
    <>
      {state === true && (
        <div className="p-5 shadow-lg">
          <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>Vedios</li>
            <li>Live</li>
          </ul>
          <h1 className="font-bold py-4">Subscriptions</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
          <h1 className="font-bold py-4">Watch Later</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
