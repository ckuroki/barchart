import React, { Component } from 'react';
import logo from './kombilabs.png';
import './App.css';
import BarChart from './BarChart';
import ArrayEditor from './ArrayEditor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSeries: [150,70,99,20,200],
      dataLabels: ["Alpha","Beta","Gamma","Delta","Epsilon"],
      colors: ['#90cece','#10cece']
    }
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
    this.setState({
      dataSeries: [...dataSeries,100 ],
      dataLabels: [...dataLabels,"New label" ]
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

  render() {
    let {dataSeries,dataLabels,colors} = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Barchart SVG component</h2>
        </div>
        <BarChart width={400} height={300} margin={30}
          dataSeries={dataSeries} dataLabels={dataLabels} colors={colors}/>
        <p>Values</p>
        <ArrayEditor arr={dataSeries} update={(el,ix)=> { this.updateDS(el,ix);} } newElem={()=> {this.addDS();}} canAdd={true}/>
        <p>Labels</p>
        <ArrayEditor arr={dataLabels} update={(el,ix)=> { this.updateLabels(el,ix);} } newElem={()=> {this.addLabel();}} canAdd={false}/>
      </div>
    );
  }
}

export default App;
