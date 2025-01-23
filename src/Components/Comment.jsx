import React from "react";

const Comment = ({ data }) => {
  const { snippet, replies } = data;
  const {
    textOriginal,
    authorDisplayName,
    authorProfileImageUrl,
  } = snippet?.topLevelComment?.snippet;

  return (
    <div className="flex shadow-lg bg-gray-200 p-2 rounded-lg ">
      <img
        src={authorProfileImageUrl}
        alt="comment-img"
        className="w-12 h-12"
      />

      <div className="px-3">
        <p className="font-bold">{authorDisplayName}</p>
        <p>{textOriginal}</p>
      </div>
    </div>
  );
};

export default Comment;
