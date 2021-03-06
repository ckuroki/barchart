import React, { Component } from 'react';
import logo from './kombilabs.png';
import './App.css';
import BarChart from './BarChart';
import ArrayEditor from './ArrayEditor';
import ValueEditor from './ValueEditor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSeries: [150,70,99,20,200],
      dataLabels: ["Alpha","Beta","Gamma","Delta","Epsilon"],
      colors: ['#90cece','#10cece'],
      width: 400,
      height: 300
    };
  }

  update(key,value) {
      this.setState({
        [key]: parseInt(value,10)|| 0
      });
  }

  add(key,value) {
    let currval = this.state[key];
      this.setState({
        [key]: parseInt(currval,10) + parseInt(value,10)
      });
  }

  updateDS(ev,ix) {
    let {dataSeries,dataLabels} = this.state;
    if (ev.target.value.length){
      this.setState({
        dataSeries: [...dataSeries.slice(0,ix),
                   ev.target.value,
                  ...dataSeries.slice(ix+1)]
      });
    } else {
      this.setState({
        dataSeries: [...dataSeries.slice(0,ix),
                  ...dataSeries.slice(ix+1)],
        dataLabels: [...dataLabels.slice(0,ix),
                  ...dataLabels.slice(ix+1)],
      });
    }
  }
  addDS() {
    let {dataSeries,dataLabels} = this.state;
    let randomValue= Math.floor(Math.random() * 100)+100;
    this.setState({
      dataSeries: [...dataSeries,randomValue ],
      dataLabels: [...dataLabels,"New" ]
    });
  }

  updateLabels(ev,ix) {
    let {dataLabels} = this.state;
    this.setState({
      dataLabels: [...dataLabels.slice(0,ix),
                   ev.target.value,
                  ...dataLabels.slice(ix+1)]
    });
  }

  updateColors(ev,ix) {
    let {colors} = this.state;
    this.setState({
      colors: [...colors.slice(0,ix),
                   ev.target.value,
                  ...colors.slice(ix+1)]
    });
  }

  render() {
    let {dataSeries,dataLabels,colors,width,height} = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Barchart SVG component</h2>
        </div>
        <div className="chart-container">
        <BarChart width={width} height={height} 
          dataSeries={dataSeries} dataLabels={dataLabels} colors={colors}/>
        </div>
        <div>
        <p>Settings</p>
        <ValueEditor title='Width' elemValue={width} plusOne={() => {this.add('width',1);}} subOne={() => {this.add('width',-1);}} update={(value) => {this.update('width',value);}} />
        <ValueEditor title='Height' elemValue={height} plusOne={() => {this.add('height',1);}} subOne={() => {this.add('height',-1);}} update={(value) => {this.update('height',value);}} />
        </div>
        <p>Values</p>
        <ArrayEditor arr={dataSeries} update={(el,ix) => { this.updateDS(el,ix);}} newElem={() => {this.addDS();}} canAdd />
        <p>Labels</p>
        <ArrayEditor arr={dataLabels} update={(el,ix) => { this.updateLabels(el,ix);}} />
        <p>Colors</p>
        <ArrayEditor arr={colors} update={(el,ix) => { this.updateColors(el,ix);}} />
      </div>
    );
  }
}

export default App;
