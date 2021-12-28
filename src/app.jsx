import { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchBar from "./components/searchBar";
import VideoList from "./components/videoList";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

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
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
