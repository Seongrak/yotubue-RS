import { useEffect, useState } from "react";
import styles from "./app.module.css";
import Detail from "./components/detail";
import SearchBar from "./components/searchBar";
import VideoList from "./components/videoList";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <SearchBar onSearch={search} />

      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <Detail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={onVideoClick}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
