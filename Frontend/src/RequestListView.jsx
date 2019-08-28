import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./myComponents/Header";

class RequestListView extends Component {
  constructor(props) {
    //this.location = this.location.bind(this);
    super(props);
    this.state = {
      isLocation: true,
      cache:[],
      requests: [],
      approvals: [],
      cache_approval: []
    };
  }
  // location = e => {
  //   const location = e.target.value;
  //   console.log("This is console location" + location);
  // };


  applyFilter=()=>{
    const gurugram = this.refs.Gurugram;
    const chennai = this.refs.Chennai
    const bangalore = this.refs.Bangalore
    const approved = this.refs.Approved;
    const pending = this.refs.Pending;
    const rejected = this.refs.Rejected; 
    const cpb= this.refs.Cpb;
    const pbb = this.refs.Pbb;
    const enterprise = this.refs.Enterprise
    console.log(approved.checked +" "+ pending.checked+" " + rejected.checked)
    const req = this.state.cache.filter((item)=>{
      console.log("checking filter");
      console.log(item)
      if(gurugram.checked||chennai.checked||bangalore.checked){
        if(item.LOCATION=='Gurugram'&&!gurugram.checked){
          return false;
        }
  
        else if(item.LOCATION=='Chennai'&&!chennai.checked){
          return false;
        }
  
        else if(item.LOCATION=='Bangalore'&&!bangalore.checked){
          return false;
        }
      }
      

       if(approved.checked||pending.checked||rejected.checked) {
         if(item.OVERALL_STATUS==='Approved'&&!approved.checked){
          return false;
        }
         else if(item.OVERALL_STATUS==='in-progress'&&!pending.checked){
          return false;
        }
         else if(item.OVERALL_STATUS==='Rejected'&&!rejected.checked){
          return false;
        }
       }

       if(cpb.checked||pbb.checked||enterprise.checked){
         if(item.BUSINESS_AREA==='Technology-CPB'&&!cpb.checked){
           return false;
         }
         else if(item.BUSINESS_AREA==='Technology-PBB'&&!pbb.checked){
          return false;
        }
        else if(item.BUSINESS_AREA==='Enterprise Solutions'&&!enterprise.checked){
          return false;
        }
       }
     
      return true;
    })
    const appr = this.state.cache_approval.filter((item)=>{
      console.log("checking filter");
      console.log(item)
      if(gurugram.checked||chennai.checked||bangalore.checked){
        if(item.LOCATION=='Gurugram'&&!gurugram.checked){
          return false;
        }
  
        else if(item.LOCATION=='Chennai'&&!chennai.checked){
          return false;
        }
  
        else if(item.LOCATION=='Bangalore'&&!bangalore.checked){
          return false;
        }
      }
      

       if(approved.checked||pending.checked||rejected.checked) {
         if(item.OVERALL_STATUS==='Approved'&&!approved.checked){
          return false;
        }
         else if(item.OVERALL_STATUS==='in-progress'&&!pending.checked){
          return false;
        }
         else if(item.OVERALL_STATUS==='Rejected'&&!rejected.checked){
          return false;
        }
       }

       if(cpb.checked||pbb.checked||enterprise.checked){
         if(item.BUSINESS_AREA==='Technology-CPB'&&!cpb.checked){
           return false;
         }
         else if(item.BUSINESS_AREA==='Technology-PBB'&&!pbb.checked){
          return false;
        }
        else if(item.BUSINESS_AREA==='Enterprise Solutions'&&!enterprise.checked){
          return false;
        }
       }
     
      return true;
    })

    this.setState({
      approvals:appr,
      requests:req
    })
  }
  
  componentDidMount() {
    let self = this;
     console.log(window.localStorage.getItem('racf'));
    // //fetch("http://127.0.0.1:8000/api/requests?racf=${window.getItem('racf')}", {

      fetch("http://127.0.0.1:8000/api/requests/myRaisedRequests", {
        method: "POST",
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          racf:window.localStorage.getItem('racf')
        })
      })
        // .then(function(response) {
        //   if (response.status >= 400) {
        //     throw new Error("Bad response from server");
        //   }
        //   return response.json();
        // })
        // .then(function(data) {
        //   console.log(data);
  
        //   self.setState({ requests: data ,cache:data});
        // })
        .then(function(response) {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
          }
          return response.json();
        })
        .then(function(data) {
          console.log(data);
  
          self.setState({ requests: data,cache:data});
        })
        .catch(err => {
          console.log("caught it!", err);
        });

      //fetch("http://127.0.0.1:8000/api/requests/myRaisedRequests", {
        fetch("http://127.0.0.1:8000/api/requests/myApprovals", {
      method: "POST",
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        racf:window.localStorage.getItem('racf')
      })
    })
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data2) {
        console.log(data2);

        self.setState({ approvals: data2 ,cache_approval:data2});
      })
      .catch(err => {
        console.log("caught it!", err);
      });
  }
  
  caseid(){
    console.log(this.id);
    window.localStorage.setItem('caseId',this.id);
  }

  render() {
    // const { isChecked } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col">
            <Header />
          </div>
        </div>

        <div className="container">
          <div class="row">
            <div className="col-12">
              <Link to="/newRequest">
                <button class="btn btn-success" style={{ float: "right" }}>
                  New Request
                </button>
              </Link>
            </div>
          </div>
          <div class="container" >
            <br />
            <div
              class="row justify-content-center"
              style={{ float: "right", width: "950px" }}
            >
              <input
                class="form-control"
                id="myInput"
                type="text"
                placeholder="Search by Req ID, project, role title..."
              />
              <br />
              <br />
              <br />
              <table class="table table-bordered table-striped">
                <thead
                  style={{
                    backgroundColor: "royalblue",
                    "text-align": "center"
                  }}
                >
                  <tr>
                    
                    <th>Req ID</th>
                    <th>Req type</th>
                    <th>BU</th>
                    <th>Team</th>
                    <th>Role title</th>
                    <th>Duration</th>
                    <th>Line Manager ID</th>
                    <th>Project</th>
                    <th>Location</th>
                    <th>Overall Status</th>
                    <th>REQUESTERID_FK</th>
                    {/* <th>LINEMANAGER_ID</th> */}
                  </tr>
                </thead>

                <tbody id="myTable" style={{ "text-align": "center" }}>
                  {this.state.requests.map(member => (
                    <tr>                      
                      <td>
                        <Link to="/track" id={member.CASEID_PK} onClick={this.caseid}>{member.CASEID_PK}</Link>
                      </td>
                      {/* <td>{member.REQUESTERID_FK}</td> */}
                      <td>{member.REQUEST_TYPE}</td>
                      <td>{member.BUSINESS_AREA}</td>
                      <td>{member.TEAM}</td>
                      <td>{member.ROLE_TITLE}</td>
                      <td>{member.DURATION}</td>
                      <td>{member.LINEMANAGER_ID}</td>
                      <td>{member.PROGRAMME}</td>
                      <td>{member.LOCATION}</td>
                      <td>{member.OVERALL_STATUS}</td> 
                      <td>{member.REQUESTERID_FK}</td>
                      {/* <td>{member.LINEMANAGER_ID}</td>                      */}
                    </tr>
                  ))}

                    {this.state.approvals.map(member => (
                    <tr>                      
                      <td>
                      <Link to="/track" id={member.CASEID_PK} onClick={this.caseid}>{member.CASEID_PK}</Link>
                      </td>
                      <td>{member.REQUEST_TYPE}</td>
                      <td>{member.BUSINESS_AREA}</td>
                      <td>{member.TEAM}</td>
                      <td>{member.ROLE_TITLE}</td>
                      <td>{member.DURATION}</td>
                      <td>{member.LINEMANAGER_ID}</td>
                      <td>{member.PROGRAMME}</td>
                      <td>{member.LOCATION}</td>
                      <td>{member.OVERALL_STATUS}</td> 
                      <td>{member.REQUESTERID_FK}</td>
                      {/* <td>{member.LINEMANAGER_ID}</td>                      */}
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
            <div class="col-sm-2" style={{ float: "left", width: "300px" }}>
              <p>
                <strong>FILTER BY:</strong>
              </p>
              <div>
                <label>
                  <input type="radio" name="colorRadio" value="Approved" ref="Approved" />
                  APPROVED{" "}
                </label>
                <br />
                <label>
                  <input type="radio" name="colorRadio" value="Rejected" ref="Rejected" />
                  REJECTED
                </label>
                <br />
                <label>
                  <input type="radio" name="colorRadio" value="Pending" ref="Pending" />
                  PENDING
                </label>
              </div>
              <p>
                <strong>LOCATION</strong>
              </p>
              <div class="checkbox">
                <label>
                  <input
                    type="checkbox"
                    name="isLocation"
                    value="Gurugram"
                    ref="Gurugram"
                  />
                  Gurugram
                </label>
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox" value="Chennai" ref="Chennai"/>
                  Chennai
                </label>
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox" value="Bangalore" ref="Bangalore"/>
                  Bangalore
                </label>
              </div>
             
              <button className="btn btn-success" onClick={this.applyFilter}>Apply</button>
            </div>
          </div>
          <div style={{ margin: "0 0 0 500px" }}>
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default RequestListView;
