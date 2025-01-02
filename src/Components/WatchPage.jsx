import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router";
import { closeMenu } from "../Slices/appSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  console.log("id", searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="WatchPage-sec">
      <div>Watch page</div>
    </div>
  );
};

export default WatchPage;
