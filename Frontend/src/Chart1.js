import React, { Component } from 'react';

export class Chart1 extends Component {
    loadGoogle(){
        const self = this;
      window.google.charts.load('current', {'packages':['corechart']});
      window.google.charts.setOnLoadCallback(drawChart);
      
      // Draw the chart and set the chart values
      function drawChart() {        
      var data =window.google.visualization.arrayToDataTable([
        ['Location', 'Pending Request','Approved Request'],
        ['Bangalore', 8,10],
        ['Gurgaon', 2,12],
        ['Chennai', 4,2],
        ['UK', 2,8],
      ]);
        var options = {'width':500, 'height':300};
        var chart = new window.google.visualization.PieChart(document.getElementById(self.props.id));
        chart.draw(data, options);      
      }
      }
  
      componentDidMount(){
        console.log("Here now!!!")
        this.loadGoogle();         
      }     
  
      render() {
          return (
            <div id ={this.props.id}>               
            </div>     
          );
      }
  }

  export default Chart1;