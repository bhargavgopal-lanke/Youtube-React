import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../Slices/appSlice";
import { YOUTUBE_API_COMMENTS } from "../../utils/Constants";
import Comment from "./Comment";

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
        const { replies } = commentsList;
        return (
          <div>
            <Comment key={commentsList?.id} data={commentsList} />
            <div
              className="replies pl-5 ml-5"
              style={{ borderLeft: "1px solid black" }}
            >
              {replies &&
                replies?.comments?.map((replies) => {
                  return <Comment key={replies?.id} data={replies} />;
                })}
            </div>
          </div>
        );
      })}{" "}
    </div>
  );
};

export default CommentsContainer;
