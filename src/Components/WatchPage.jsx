import CommentsContainer from "./Comments/CommentsContainer";
import { useSearchParams } from "react-router";
import LiveChat from "./LiveChat/LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const selectedVedioId = searchParams.get("v");

  return (
    <div className="WatchPage-sec">
      <div>
        <div className="flex px-5">
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
          <div className="">
            <LiveChat />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold my-5">Comments:</h1>
          <CommentsContainer vedioId={selectedVedioId} />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
