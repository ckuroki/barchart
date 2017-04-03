import React, { Component } from 'react';
import logo from './kombilabs.png';
import './App.css';
import BarChart from './BarChart';

class App extends Component {
  render() {
  let dataSeries=[150,70,99,20,200];
  let dataLabels=["Alpha","Beta","Gamma","Delta","Epsilon"];
  let colors=['#90cece','#10cece'];
  //let dataSeries=[];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Barchart SVG component</h2>
        </div>
        <BarChart width={400} height={300} margin={30}
          dataSeries={dataSeries} dataLabels={dataLabels} colors={colors}/>
      </div>
    );
  }
}

export default App;
