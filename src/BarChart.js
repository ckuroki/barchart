import React, { Component,PropTypes } from 'react';
import './BarChart.css';

class BarChart extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    margin: PropTypes.number.isRequired,
    dataSeries: PropTypes.array.isRequired,
    dataLabels: PropTypes.array,
    colors: PropTypes.array.isRequired
  }

  render() {
  let {width,height,margin,dataSeries,dataLabels,colors} = this.props;
  let bars=[];
  let labels=[];
  let values=[];

  // Draw a box around the SVG using a <path> element
  // Uses ES6 String interpolation (backquotes)
  let box= <path d={`M0 0 H${width} V${height} H 0 V 0`} fill="transparent" stroke="black"/>;

  // Check If there is some data to plot
  if (dataSeries.length > 0 ) {
    // Measure the width of each bar
    let barwidth=(width-(margin*2))/dataSeries.length;

    // Return a <rect> element for each value on dataSeries
    bars=dataSeries.map( (elem,index) => { 
      let barx=(margin+(index*barwidth));
        return (<rect key={`bar_${index}`} x={barx} y={height-margin-elem}
                width={barwidth} height={elem} style={{fill: (index %2)?colors[0]:colors[1],stroke: 'gray'}}/>);
    });

    // Return a <text> element, containing labels for each value
    labels=dataLabels.map( (elem,index) => { 
      let barx=(margin+(index*barwidth));
        return (<text key={`lbl_${index}`} x={barx} y={height-(margin/2)} style={{fontSize: '.9em'}}>{elem}</text>);
    });

    // Return a <text> element, with actual value for each bar
    // A better implementation can be to draw an Y-Axis with this info
    // but keeps this way for simplicity
    values=dataSeries.map( (elem,index) => { 
      let barx=(margin+(index*barwidth));
        return (<text key={`row_${index}`} x={barx+(barwidth/3)} y={height-elem-margin} style={{fontSize: '.9em'}}>{elem}</text>);
    });

  } else {
    // If no data was entered, display a <text> element with a message
    bars.push(<text x={50} y={height/2}>No data... </text>);
  }

    return (
      <svg className="bar-chart" width={width} height={height} xmlns="http://www.w3.org/2000/svg">
        {box}
        {bars}
        {labels}
        {values}
      </svg>
    );
  }
}

export default BarChart;
