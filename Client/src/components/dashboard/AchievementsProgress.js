import React from "react";
import ProgressBar from "./ProgressBar";
import Title from "./Title";

function AchievementsProgress(props) {
  return (
    <React.Fragment>
      <Title>Achievements Progress</Title>
      <br />
      <ProgressBar progress={props.progress}/>
      <br />
    </React.Fragment>
  );
}

export default AchievementsProgress;
