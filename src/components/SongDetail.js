import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
  if (!props.song) {
    return <div>Select a song</div>;
  }
  return (
    <div className="song-detail">
      <h3>Details for:</h3>
      <p>
        Title: {props.song.title} <br />
        Duration: {props.song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
