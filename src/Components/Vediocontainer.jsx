import React, { useEffect, useState } from "react";
import { YOUTUBE_VEDIOS_URL } from "../utils/Constants";
import VedioCard from "./VedioCard";
import { Link } from "react-router";

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
    <div className="vedioContainer-sec flex flex-wrap">
      {vedios.map((val) => {
        return (
          <Link to={`/watch/${val.id}`}>
            <VedioCard key={val.id} val={val} />
          </Link>
        );
      })}
    </div>
  );
};

export default Vediocontainer;
