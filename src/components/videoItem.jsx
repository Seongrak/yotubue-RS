import React, { memo } from "react";
import styles from "./videoItem.module.css";

const VideoItem = memo(
  ({ video, video: { snippet }, onVideoClick, display }) => {
    const displayType = display === "list" ? styles.list : styles.grid;

    return (
      <li
        className={displayType} //
        onClick={() => onVideoClick(video)}
      >
        <div className={styles.video}>
          <img
            className={styles.thumbnails}
            src={snippet.thumbnails.medium.url}
            alt="video thumbnails"
          />
          <div className={styles.metadata}>
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.channel}>{snippet.channelTitle}</p>
          </div>
        </div>
      </li>
    );
  }
);

export default VideoItem;