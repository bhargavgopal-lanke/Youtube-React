import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Music",
    "Telugu Cinema",
    "Comedy",
    "Cricket",
    "Cooking",
    "News",
    "Gaming",
    "t-Series",
  ];
  return (
    <div className="flex mb-5">
      <Button name={list} />
    </div>
  );
};

export default ButtonList;
