import React, { Component } from 'react';
import { Chart1 } from "./Chart1";
import { Chart2 } from "./Chart2";
import { Chart3 } from "./Chart3";
import { Chart4 } from "./Chart4";
import './Container.css';
import { TimeRange } from './TimeRange';

const titleStyle = {
    padding: "10px"
};
export class Container extends Component {  

      obj = {
        cls:["resource1","resource2","resource3","resources4"]
    }
      render() {
          return (
        <React.Fragment>

            <div style={{padding: "10px"}}><TimeRange /></div><br/>
            <div className="container">
            <h1 class="display-5" style={titleStyle}>Dashboard </h1>
              <p class="lead" style={titleStyle}>
                The following Dashboard enables you to get a deep insight about different approvals and requests and their status. 
                </p>
                    {/* <div className="row mb-4"> */}
                        {/* <div class="col-sm-6"></div>  */}
                        {/* <div className="col-lg-6"> */}
                        <div className="card-deck">
                            <div className="card" width="300px">
                                <div className="card-header">Total Requests at Different Levels</div>
                                <div className="card-body"><Chart2 id ={this.obj.cls[1] }/></div>
                            </div>
                        {/* </div> */}
                        {/* <div className="col-lg-6"> */}
                            <div className="card">
                                <div className="card-header" >Pending Requests Location Wise</div>
                                <div className="card-body"><Chart1 id ={this.obj.cls[0] }/></div>
                            </div>
                        </div>
                        {/* <div className="col-md-4 col-lg-4 col-sm-4"><h2><Chart1 id ={this.obj.cls[0]}/></h2></div>   */}
                      <br/>                   
                    {/* </div> */}
                    {/* <div className="row mb-2">
                        <div className="col-lg-6"> */}
                        <div className="card-deck">
                                <div className="card">
                                    <div className="card-header">Pending Requests Bussiness Unit Wise</div>
                                    <div className="card-body"><Chart3 id ={this.obj.cls[2] }/></div>
                                </div>
                        {/* </div> */}
                        {/* <div className="col-lg-6"> */}
                            <div className="card">
                                <div className="card-header">Total Requests Supplier Wise</div>
                                <div className="card-body"><Chart4 /></div>
                            </div>
                            
                        {/* </div> */}

                        
                        {/* <div className="col-md-4 col-lg-4 col-sm-4">
                                <div className="card ml-5 mt-5">
                                    <div className="card-header">Requests/Level</div>
                                    <div className="card-body"><h2><Chart4 /></h2></div>
                                </div>
                        </div> */}
                    </div>
                    <br/>
            </div>   
    </React.Fragment>  
          );
      }

      
  }
  export default Container;