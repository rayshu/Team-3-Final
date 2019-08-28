import React, { Component } from 'react';
import {Chart} from 'react-google-charts';

export class Chart4 extends Component {
    render(){
        return(
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Supplier', 'Total', 'Approved', 'Pending'],
                    ['TCS', 1000, 400, 200],
                    ['Cognizant', 1170, 460, 250],
                    ['Infosys', 1660, 1120, 300],
                    ['Accenture', 1030, 540, 350],
                ]}
                options={{
                    axes:{
                        y:{
                            0: { side: 'top', label: 'No. of Requests'}
                        }
                    },    
                }}
                // options={{
                //     // Material design options
                //     chart: {
                //     title: 'Company Performance',
                //     subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                //     },
                // }}
                // For tests
                rootProps={{ 'data-testid': '2' }}
                />
        );

    }

}
export default Chart4;