import React from "react";

const Vedios = ({ vedios }) => {
  return (
    <div className="flex gap-5">
      {vedios.map((val) => {
        const { snippet, statistics } = val || "";
        const { title, thumbnails, channelTitle } = snippet || "";
        const { viewCount } = statistics || "";
        return (
          <div key={val?.id} className="w-48">
            <img src={thumbnails?.medium?.url} alt="tumbnail" />
            <p>{title}</p>
            <p>{channelTitle}</p>
            <p>{viewCount}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Vedios;
