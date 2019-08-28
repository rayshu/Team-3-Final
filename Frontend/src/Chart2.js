import React, { Component } from 'react';

export class Chart2 extends Component {
    loadGoogle(){
        const self = this;
        console.log("Hello");
        window.google.charts.load('current', {'packages':['bar']});
        window.google.charts.setOnLoadCallback(drawStuff);
  
        function drawStuff() {
            var data = new window.google.visualization.arrayToDataTable([
                ['Levels', 'Total','Approved', 'Pending'],
                ['L1', 53,30, 23],
                ['L2', 28,24, 4],
                ['L3',43, 30, 13],
                ['L4', 59,50, 9],
                ['L5', 61,50, 11]
            ]);
    
            var options = {
                width:500,
                height:300,
                axes:{
                    x:{
                        0: { side: 'top', label: 'No. of Requests'}
                    }
                },              
            bars: 'horizontal' // Required for Material Bar Charts.
            };

            var chart = new window.google.charts.Bar(document.getElementById(self.props.id));
            chart.draw(data, window.google.charts.Bar.convertOptions(options));
          
        };
    };
      
      
  
      componentDidMount(){
          console.log("In chart2");
          this.loadGoogle();
      }     
  
      render() {
          return (
            <div id = {this.props.id}></div>     
          );
      }
  }

  export default Chart2;