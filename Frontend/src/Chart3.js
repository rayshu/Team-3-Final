import React, { Component } from 'react';

export class Chart3 extends Component {
    loadGoogle(){
        const self = this;
        console.log("Hello");
        window.google.charts.load("current", {packages:["corechart"]});
        window.google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
        var data = window.google.visualization.arrayToDataTable([
          ['Task', 'Pending Requests'],
          ['CPB',     11],
          ['DES',      2],
          ['Payments',  2],
          ['Enterprise', 2],
          ['Risk',    7]
        ]);

        var options = {
      
          width:500,
          height:300,
          // title: 'Pending Requests/Business Units',
          pieHole: 0.4,
        };

        var chart = new window.google.visualization.PieChart(document.getElementById(self.props.id));
        chart.draw(data, options);
      }
          };
  
        componentDidMount(){
            console.log("In chart3");
            this.loadGoogle();
        }    
        render() {
            return (
              <div id = {this.props.id}></div>     
            );
        }
    
      };
      
      export default Chart3;     
  
     
  
    