import React, { Component } from "react";

class RequestViewStatusbar extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h2 style={{ color: "slateblue" }}>Welcome User</h2>
            {/* <h2 style={{ color: "royalblue" }}>Case Id : 123654</h2> */}
          </div>
          <div className="col-4">
            <h3 style={{ color: "royalblue" }}>Status</h3>
            <h3>
            <span className="badge badge-success">In-Progress</span>
            </h3>
          </div>
          <div className="col-4">
            <h3 style={{ color: "royalblue" }}>Stage</h3>
            <h3>
              <span className="badge badge-success">Line Manager</span>
            </h3>
            <h3>
            <span className="badge badge-success">State</span>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default RequestViewStatusbar;
