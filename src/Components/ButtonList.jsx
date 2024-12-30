import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Music" />
      <Button name="Telugu Cinema" />
      <Button name="Comedy" />
      <Button name="t-Series" />
    </div>
  );
};

export default ButtonList;
