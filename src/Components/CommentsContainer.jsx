import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Slices/appSlice";
import { YOUTUBE_API_COMMENTS } from "../utils/Constants";

const CommentsContainer = ({ vedioId }) => {
  const dispatch = useDispatch();

  const [comments, setComments] = useState();

  useEffect(() => {
    fetchComments();
    dispatch(closeMenu());
  }, [dispatch]);

  const fetchComments = async () => {
    const commentsAPI = await fetch(YOUTUBE_API_COMMENTS + vedioId);
    const commentsJson = await commentsAPI.json();
    setComments(commentsJson);
  };

  return (
    <div>
      {comments?.items?.map((commentsList) => {
        const { id, snippet } = commentsList;

        return (
          <ul key={id}>
            <li>{snippet?.topLevelComment?.snippet?.textOriginal}</li>
          </ul>
        );
      })}{" "}
    </div>
  );
};

export default CommentsContainer;
