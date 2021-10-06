import React, { useState } from 'react';
import { VscDebugStart } from "react-icons/vsc";
import { VscDebugRestart } from "react-icons/vsc";
import { ImPause } from "react-icons/im";
import { GiRollingEnergy } from "react-icons/gi";

import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Controller() {
  const [isPausing, setIsPausing] = useState(false);
  const [progress, setProgress] = useState('reset');

  async function pauseAndDelaySorting() {
    // pauseSorting();
    setProgress("pause");
    // setIsPausing(true);
    // await delay(useControls.getState().swapTime);
    // setIsPausing(false);
  }

  function getProgressButton() {
    if (isPausing) return <ImPause style={{ color: "#e5e5e5" }} />;

    // eslint-disable-next-line default-case
    switch (progress) {
      case "reset":
        return <VscDebugStart onClick={() => setProgress("start")} />;
      case "start":
        return <ImPause onClick={pauseAndDelaySorting} />;
      case "pause":
        return <VscDebugStart onClick={() => setProgress("reset")} />;
      case "done":
        return <ImPause style={{ color: "#e5e5e5" }} />;
    }
  }

  return (
    <div className="control-bar">
      <div className="array-bar">
        <Button
          endIcon={<GiRollingEnergy />}
          variant="contained"
          color="primary">
          Generate
        </Button>
        <TextField
          id="outlined-basic"
          label="Input"
          variant="outlined"
          size="small"
          width="100px"
          style={{ flexGrow: 1, margin: "0 10px" }}
        />
      </div>
      <div className="execution-bar">
        <Slider
          min={1}
          max={10}
          aria-labelledby="discrete-slider"
          marks
          valueLabelDisplay="auto"
          style={{ flexGrow: 1, flexBasis: "100%" }}
          color="secondary"
        />
        <div style={{ display: "flex", marginLeft: '20px', columnGap: '5px', cursor: "pointer" }}>
          {getProgressButton()}
          <VscDebugRestart />
        </div>
      </div>
    </div>
  )
}

export default Controller
