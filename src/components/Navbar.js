import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { sortingAlgorithms } from '../config';

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

function Navbar({ algorithm, setAlgorithm }) {
  const classes = useStyles();
  // const [algorithm, setAlgorithm] = useState(0);
  return (
    <div className={classes.root}>
      <h1 style={{ textAlign: 'center', margin: '5px 0 15px 0', }}>Sorting Algorithms Visualizer</h1>
      <AppBar position="static" >
        <Tabs
          value={algorithm}
          onChange={(event, id) => setAlgorithm(id)}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {sortingAlgorithms.map((algorithm) => (
            <Tab
              label={algorithm.title}
              {...a11yProps(0)}
              key={algorithm.title}
            />
          ))}
          <Tab label="All" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    // margin: '0px 10px'
  },
}));

export default Navbar
