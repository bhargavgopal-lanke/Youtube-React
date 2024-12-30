import React, { useEffect, useState } from "react";
import { YOUTUBE_VEDIOS_URL } from "../utils/Constants";
import VedioCard from "./VedioCard";


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
      <VedioCard vedios={vedios} />
    </div>
  );
};

export default Vediocontainer;
