import React, { Component } from 'react';
// import moment from 'moment';
// import $ from 'jquery';

export class TimeRange extends Component {

//     // <script type="text/javascript">
//     loadTime() {

//     var start = moment().subtract(29, 'days');
//     var end = moment();

//     function cb(start, end) {
//         $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
//     }

//     $('#reportrange').daterangepicker({
//         startDate: start,
//         endDate: end,
//         ranges: {
//            'Today': [moment(), moment()],
//            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
//            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
//            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
//            'This Month': [moment().startOf('month'), moment().endOf('month')],
//            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
//         }
//     }, cb);

//     cb(start, end);

// };
// // </script>
    // componentDidMount(){    
    //     this.loadRange();         
    //   } 
  render() {
    return (
    
        <div class="dropdown">
            <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Filter by time
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Last 1 month</a>
                <a class="dropdown-item" href="#">Last 6 months</a>
                <a class="dropdown-item" href="#">Last 1 year</a>
                <a class="dropdown-item" href="#">Last 3 years</a>
            </div>
</div>

    // <div id="reportrange" style="background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc; width: 100%">
    //     <i class="fa fa-calendar"></i>&nbsp;
    //     <span></span> <i class="fa fa-caret-down"></i>
    // </div>
    );
  }
}
