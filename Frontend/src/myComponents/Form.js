import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
// import Footer from './Footer';


export class Form extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            RequesterID_FK: null,
            CIO_Approval: null,
            Business_Area: null,
            Team: null,
            Requester: null,
            Request_Type: null,
            Resource_Type: null,
            Duration: null,
            Tenure: null,
            Ex_Re_Re: null,
            Replacement_Exit: null,
            Role_Title:null,
            Location: null,
            Justification: null,
            Cost_Center: null,
            Run_Change: null,
            Within_Budget: null,
            Case_Alligned: null,
            LineManager_ID: null,
            Supplier: null,
            Programme: null,
            Techmis: null,
            Project_Category: null,
            SOW: null,
            Impact: null,
            Critical_Resource: null
            
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log("Final data is: ", data)

        fetch('http://127.0.0.1:8000/api/requests/new', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          }) 
           .then((response) => response.json())
           .then((responseJson) => {
               console.log(responseJson);
           })
           .catch((error) => {
               console.log("reset client error-------",error);
          });

          window.alert('Request Submitted Successfully')
          this.props.history.push("/home")
        
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    render() {
        const {RequesterID_FK} = this.state
        const {Team} = this.state
        const {Requester} = this.state
        const {Duration} = this.state
        const {Tenure} = this.state
        const { Ex_Re_Re} =  this.state
        const {Replacement_Exit} = this.state
        const {Role_Title} = this.state
        const {Justification} = this.state
        const {Cost_Center} = this.state
        const {Within_Budget} = this.state
        const {Case_Alligned} = this.state
        const {LineManager_ID} = this.state
        const {Supplier} = this.state
        const {Programme} = this.state
        const {Techmis} = this.state
        const {Project_Category} = this.state
        const {Impact} = this.state
        const {Critical_Resource} = this.state

        return (
            <div>
                <div className="row">
                   <div className="col"><Header/></div>
                </div>

                <div className="row">
                    <div className="col">
                        <Link to="/newRequest">
                            <button type="Submit" className="btn btn-sm btn-info">Back</button>
                        </Link> <br/> <br/>
                    </div>
                </div>

                <form className="needs-validation" novalidate onSubmit={this.handleSubmit} >
                    <div className="row">
                        <div className="col">
                            <div className="card-group">
                                <div className="card">                                    
                                    <div className="card-body">  

                                    <label htmlFor="RequesterID_FK">Requester RACF ID</label>
                                        <input type="text" id="RequesterID_FK" name="RequesterID_FK" value={RequesterID_FK} className="form-control"
                                         required onChange={this.handleInputChange}></input>
                                        <br/>

                                        <label htmlFor="CIO_Approval">CIO Approvals:</label>
                                        <select className="form-control" id="CIO_Approval" name="CIO_Approval" onChange={this.handleInputChange}>
                                            <option value="" disabled selected>Select your option</option>
                                            <option >Yes</option>
                                            <option >No</option>
                                        </select>
                                    
                                        
                                        <br></br>
                                        <label htmlFor="Business_Area">Business Area</label>
                                        <select className="form-control" id="Business_Area" name="Business_Area" onChange={this.handleInputChange}>
                                            <option value="" disabled selected>Select your option</option>
                                            <option>Technology-Controls</option>
                                            <option>Technology-CPB</option>
                                            <option>Technology-CTO</option>
                                            <option>Technology-DES</option>
                                            <option>Technology-ES</option>
                                            <option>Technology-PBB</option>
                                            <option>Technology-Core Banking</option>
                                            <option>Technology-Payments</option>
                                            <option>Technology-PBM</option>
                                            <option>Technology-NWM P2</option>
                                        </select>
                                        <br></br>
                                        
                                        <label htmlFor="Team">Team</label>
                                        <input type="text" id="Team" name="Team" value={Team} className="form-control"
                                         required onChange={this.handleInputChange}></input>
                                        <br/>

                                        <label htmlFor="Requester" required>Requester</label>
                                        <input type="text" id="Requester" className="form-control" 
                                        required name="Requester" value={Requester} onChange={this.handleInputChange}></input>
                                        <br></br>

                                        <label htmlFor="Resource_Type" >Resource Type</label>
                                        <select className="form-control" id="Resource_Type" name="Resource_Type"  onChange={this.handleInputChange}>
                                            <option value="" disabled selected>Select your option</option>
                                            <option>Managed Services</option>
                                            <option>Contractor</option>
                                        </select> 
                                        <br></br>

                                        <label htmlFor="Request_Type" >Request Type</label>
                                        <select className="form-control" id="Request_Type" name="Request_Type" onChange={this.handleInputChange}>
                                            <option value="" disabled selected>Select your option</option>
                                            <option>New</option>
                                            <option>Extension</option>
                                            <option>Replacement</option>
                                        </select> 
                                        <br></br>

                                <label htmlFor="Duration" >Duration of Engagement (in Months)</label>
                                <input type="number" id="Duration" className="form-control" name="Duration" value={Duration} onChange={this.handleInputChange}></input>
                                <br></br>

                                <label htmlFor="Tenure" >Tenure of Resource (in Months)</label>
                                <input type="number" id="Tenure" className="form-control"  name="Tenure" value={Tenure} onChange={this.handleInputChange}></input>
                                <br></br>

                                <label htmlFor="Ex_Re_Re" >Extension/Rebalancing/Replacement (PeopleSoft ID)</label>
                                <input type="text" id="Ex_Re_Re" className="form-control" name="Ex_Re_Re" value={Ex_Re_Re} onChange={this.handleInputChange}></input>
                                <br></br>

                                <label htmlFor="Replacement_Exit" >Replacement Exit Date</label>
                                <input type="date" data-date="" data-date-format="YYYY-MM-DD" id="Replacement_Exit" className="form-control" name="Replacement_Exit" value={Replacement_Exit} onChange={this.handleInputChange}></input>
                                <br></br>

                                <label htmlFor="Role_Title" >Role Title</label>
                                <input type="text" id="Role_Title" className="form-control" required name="Role_Title" value={Role_Title} onChange={this.handleInputChange}></input>
                                <br></br>

                                <label htmlFor="Location" >Location</label>
                                    <select className="form-control" id="Location" name="Location" onChange={this.handleInputChange}>
                                    <option value="" disabled selected>Select your option</option>
                                     <option>Gurugram</option>
                                     <option>Bengaluru</option>
                                     <option>Chennai</option>
                                     <option>New Delhi</option>
                                     <option>Off-Site</option>
                                    </select> 
                                <br></br>

                                <label htmlFor="Justification" >What is the Role for? (Justification)</label>
                                <textarea className="form-control rounded-0" id="Justification" required name="Justification" value={Justification} onChange={this.handleInputChange}></textarea>
                                <br></br>
                            </div>
                    </div>
                </div>
                        </div>


                        <div class="col">
                        <div className="card-group">
                    <div className="card">
                        
                            <div className="card-body">
                                
                                    <label htmlFor="Cost_Center" >Cost Centre</label>
                                    <input type="text" id="Cost_Center" 
                                    className="form-control" required name="Cost_Center" value={Cost_Center} onChange={this.handleInputChange}></input>
                                    <br></br>

                                    <label htmlFor="Run_Change" id="Run_Change" >Run / Change</label>
                                    <select className="form-control" id="Run_Change" name="Run_Change" onChange={this.handleInputChange}>
                                     <option value="" disabled selected>Select your option</option>
                                     <option>Run</option>
                                     <option>Change</option>
                                    </select> 
                                    <br></br>

                                    <label htmlFor="Within_Budget" >Within Budget/Target? (if run)</label>
                                    <input type="text" id="Within_Budget" className="form-control" name="Within_Budget" value={Within_Budget} onChange={this.handleInputChange} ></input>
                                    <br></br>

                                    <label htmlFor="Case_Alligned" >Document Business case aligned to (if change)</label>
                                    <input type="text" id="documentCase" className="form-control" name="Case_Alligned" value={Case_Alligned} onChange={this.handleInputChange}></input>
                                    <br></br>

                                    <label htmlFor="LineManager_ID" >Line Manager ID</label>
                                    <input type="text" id="LineManager_ID" className="form-control" required name="LineManager_ID" value={LineManager_ID} onChange={this.handleInputChange}></input>
                                    <br></br>

                                    <label htmlFor="Supplier" >Supplier</label>
                                    <input type="text" id="Supplier" className="form-control" name="Supplier" value={Supplier} onChange={this.handleInputChange}></input>
                                    <br></br>

                                    <label htmlFor="Programme" >Programme/Project</label>
                                    <input type="text" id="Programme" className="form-control" required name="Programme" value={Programme} onChange={this.handleInputChange}></input>
                                    <br></br>

                                    <label htmlFor="Techmis" >TechMis/Oracle</label>
                                    <input type="text" id="Techmis" className="form-control" name="Techmis" value={Techmis} onChange={this.handleInputChange}></input>
                                    <br></br>

                                    <label htmlFor="Project_Category" >Project Categorization</label>
                                    <input type="text" id="Project_Category" className="form-control" name="Project_Category" value={Project_Category} onChange={this.handleInputChange}></input>
                                    <br></br>

                                    <label htmlFor="SOW" id="SOW">Does this Request have a clearly defined SOW?</label>
                                    <select className="form-control" id="SOW" name="SOW" onChange={this.handleInputChange}>
                                     <option value="" disabled selected>Select your option</option>
                                     <option>Yes</option>
                                     <option>No</option>
                                    </select>
                                    <br/>

                                    <label htmlFor="Impact" >Impact of non Approval</label>
                                    <input type="text" id="Impact" className="form-control" required name="Impact" value={Impact} onChange={this.handleInputChange}></input>
                                    <br></br>

                                    <label htmlFor="Critical_Resource" >Critical Resource Selection</label>
                                    <input type="text" id="Critical_Resource" className="form-control" name="Critical_Resource" value={Critical_Resource} onChange={this.handleInputChange}></input>
                                    <br/><br/>
                                   
                                   <p><button className="btn btn-success">Submit Request</button></p>
                                  
                                
                            </div>

                    </div>
                   
                </div>
                        </div>
                    </div>
                </form>
                                  
            </div>
        );
    }
}

export default Form;