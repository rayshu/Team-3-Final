import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RequestViewForm extends Component {
  constructor(props) {
    //this.location = this.location.bind(this);
    super(props);
    this.state = {      
      viewForm: [],
      cache:[]
    };
  }

  componentDidMount() {
    let self = this;
    fetch("http://127.0.0.1:8000/api/requests", {
      method: "GET"
    })
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        self.setState({ viewForm: data ,cache:data});
      })
      .catch(err => {
        console.log("caught it!", err);
      });
  }
    state = {  }

    handleSubmit = (event) => {
      event.preventDefault()
     
      console.log("dgf");

      fetch('http://127.0.0.1:8000/api/requests/approval', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            caseId : window.localStorage.getItem('caseId')
          }
          ),
        }) 
         .then((response) => response.json())
         .then((responseJson) => {
             console.log(responseJson);
         })
         .catch((error) => {
             console.log("reset client error-------",error);
        });
      // window.alert("Account Created");
      // this.props.history.push("/home");

  }

    render() { 
        return ( 
          <div>
           
            <div className="container">
          <div className="row">
            <table className="table">
              <thead>
                <tr>
                
                  <th>Information Field</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
              {this.state.viewForm.map(member => (
                <tr>
                  <td>CASE ID</td>
                  <td>{member.CASEID_PK}</td>
                  
                </tr>
                
                 ))}
                <tr>
                  <td>Bussiness Area</td>
                  <td />
                </tr>
                <tr>
                  <td>Team</td>
                  <td>ABC</td>
                </tr>
                <tr>
                  <td>Requester</td>
                  <td>Yash</td>
                </tr>
                <tr>
                  <td>Role Title</td>
                  <td>Buisiness Analyst</td>
                </tr>
                <tr>
                  <td>Duration Of Engagement</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>Resource Type</td>
                  <td />
                </tr>
                <tr>
                  <td>Location</td>
                  <td>Gurugram</td>
                </tr>
                <tr>
                  <td>Job Requirement</td>
                  <td>Experience 5+ Years</td>
                </tr>
                <tr>
                  <td>Line Manager ID</td>
                  <td>454210</td>
                </tr>
                <tr>
                  <td>Project</td>
                  <td>Smart Hiring</td>
                </tr>
                <tr>
                  <td>Project</td>
                  <td />
                </tr>
             
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-2">
              <form onSubmit={this.handleSubmit}>
              <button className="btn btn-success"  >
                Accept
              </button></form>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-danger btn-block">
                Reject
              </button>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-info btn-block">
                Modify
              </button>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-warning btn-block">
                Send Back
              </button>
            </div>
            <div className=" col-4 ">
              <Link to="/home">
              <button  className="float-right btn btn-primary" >
                Back <i className="fas fa-arrow-alt-circle-left" />
              </button></Link>
            </div>
          </div>
        </div>
        </div>
         );
    }
}
 
export default RequestViewForm;