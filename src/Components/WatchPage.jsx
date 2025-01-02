import React from "react";
import { useParams } from "react-router";

const WatchPage = () => {
  const { id } = useParams();

  console.log("id", id);

  return <div>WatchPage</div>;
};

export default WatchPage;
