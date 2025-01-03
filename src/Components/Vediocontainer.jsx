import React, { useEffect, useState } from "react";
import { YOUTUBE_VEDIOS_URL } from "../utils/Constants";
import VedioCard, { AdVedioCard } from "./VedioCard";
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
      {vedios[0] && <AdVedioCard val={vedios[0]} />}
      {vedios.map((val) => {
        return (
          <Link to={"/watch?v=" + val.id} key={val.id}>
            <VedioCard val={val} />
          </Link>
        );
      })}
    </div>
  );
};

export default Vediocontainer;
