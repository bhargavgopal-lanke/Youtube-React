import React from "react";

const Vedios = ({ vedios }) => {
  return (
    <div className="flex">
      {vedios.map((val) => {
        const { snippet, statistics } = val || "";
        const { title, thumbnails, channelTitle } = snippet || "";
        const { viewCount } = statistics || "";
        return (
          <div key={val?.id} className="p-2 m-2 w-72 shadow-lg">
            <img
              src={thumbnails?.medium?.url}
              alt="tumbnail"
              className="rounded-lg mb-2"
            />
            <ul>
              <li className="font-bold">{title}</li>
              <li>{channelTitle}</li>
              <li>{viewCount}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Vedios;
