import React, { useEffect, useState } from "react";
import { YOUTUBE_VEDIOS_URL } from "../utils/Constants";
import Vedios from "./Vedios";

const Vediocontainer = () => {
  const [vedios, setVedios] = useState([]);

  const fetchVediosList = async () => {
    const vedioList = await fetch(YOUTUBE_VEDIOS_URL);
    const vedioListData = await vedioList.json();
    setVedios(vedioListData.items);
  };

  useEffect(() => {
    fetchVediosList();
  }, []);

  

  return (
    <div className="vedioContainer-sec">
      <Vedios vedios={vedios} />
    </div>
  );
};

export default Vediocontainer;
