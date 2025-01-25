const GOOGLE_API_KEY = "AIzaSyCJixZ1wbG-uyuDNhdW8MIr_840w7yyGKs";

export const YOUTUBE_VEDIOS_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_API_COMMENTS =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=" +
  GOOGLE_API_KEY +
  "&videoId=";

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

  export const IMAGEPATH =
    "https://yt3.ggpht.com/plcVYITpmZqGO7TLpDkJr7E6E6FLCT6KC67zAZPXEBvx_hqu8M7mxsabJaFAGydykYdds7Yv=s48-c-k-c0x00ffffff-no-rj";
