import React from 'react'
import { sortingAlgorithms } from '../config';
import ArrayContainer from './visualizer/ArrayContainer';
import Timer from './visualizer/Timer';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
      style={{ maxWidth: "100%" }}
    >
      {value === index && children}
    </div>
  );
}

function AlgoDisplay({ array, algorithm }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {
        sortingAlgorithms.map((algoInfo, index) => (
          <TabPanel value={algorithm} index={index} key={algoInfo.name}>
            <div className="algo-container">
              <div className="algo-header">
                <strong>{algoInfo.name}</strong>
                <div className="timer-div">
                  <span>Time:</span>
                  <strong>
                    <Timer />
                  </strong>
                </div>
              </div>
              <ArrayContainer array={array} />
              <div className="info-footer">
                <div>Swaps: <strong>{0}</strong></div>
                <div>Comparisions: <strong>{0}</strong></div>
              </div>
            </div>
          </TabPanel>
        ))
      }
      <TabPanel value={algorithm} index={sortingAlgorithms.length} >
        <div className="all-algo">
          {
            sortingAlgorithms.map(algoInfo => (
              <div className="algo-container">
                <div className="algo-header">
                  <strong>{algoInfo.name}</strong>
                  <div className="timer-div">
                    <span>Time:</span>
                    <strong>
                      <Timer />
                    </strong>
                  </div>
                </div>
                <ArrayContainer array={array} />
                <div className="info-footer">
                  <div>Swaps: <strong>{0}</strong></div>
                  <div>Comparisions: <strong>{0}</strong></div>
                </div>
              </div>
            ))
          }
        </div>
      </TabPanel>
    </div>
  )
}

export default AlgoDisplay
