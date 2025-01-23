import CommentsContainer from "./CommentsContainer";
import { useSearchParams } from "react-router";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const selectedVedioId = searchParams.get("v");

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

        <CommentsContainer vedioId={selectedVedioId} />
      </div>
    </div>
  );
};

export default WatchPage;
