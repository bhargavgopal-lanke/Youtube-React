import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Sidebar = () => {
  const state = useSelector((store) => store?.appInfo?.toggle);

  // early return pattern
  if (!state) return null;

  return (
    <>
      {/* {state === true && ( */}
      <div className="p-5 shadow-lg">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
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
        <h1 className="font-bold py-4">
          <Link to={"/watch"}>Watch Later</Link>
        </h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
      {/* )} */}
    </>
  );
};

export default Sidebar;
