import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router";
import { closeMenu } from "../Slices/appSlice";
import { YOUTUBE_API_COMMENTS } from "../utils/Constants";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const selectedVedioId = searchParams.get("v");
  const [comments, setComments] = useState();

  useEffect(() => {
    fetchComments();
    dispatch(closeMenu());
  }, [dispatch]);

  const fetchComments = async () => {
    const commentsAPI = await fetch(YOUTUBE_API_COMMENTS + selectedVedioId);
    const commentsJson = await commentsAPI.json();
    setComments(commentsJson);
  };

  return (
    <div className="WatchPage-sec">
      <div>
        <iframe
          width="1000"
          height="500"
          src={"https://www.youtube.com/embed/" + selectedVedioId}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        {comments?.items?.map((commentsList) => {
          const { id, snippet } = commentsList;

          return (
            <ul key={id}>
              <li>{snippet?.topLevelComment?.snippet?.textOriginal}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default WatchPage;
