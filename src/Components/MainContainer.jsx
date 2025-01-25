import React from "react";
import ButtonList from "./ButtonsList/ButtonList";
import Vediocontainer from "./Vedios/Vediocontainer";

const MainContainer = () => {
  return (
    <div className="body-sec  mx-7 my-5">
      <ButtonList />
      <Vediocontainer />
    </div>
  );
};

export default MainContainer;
