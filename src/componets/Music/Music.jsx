import React from "react";
// import c from './Music.module.css'

const Music = (props) => {
    const playlistId = '6VugrLq7qoCFPV78p7LirB';
    return (
    <div>
<iframe
  title="Spotify Embed: Recommendation Playlist "
  src={`https://open.spotify.com/embed/playlist/6VugrLq7qoCFPV78p7LirB?utm_source=generator&theme=0`}
  width="100%"
  height="100%"
  style={{ minHeight: '616px' }}
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
/>
    </div>
    )
}

export default Music;