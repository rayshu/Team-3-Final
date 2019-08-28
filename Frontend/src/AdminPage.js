    import React, { Component } from 'react';
    //import './AdminPage.css';
    import Header from './myComponents/Header';
     import 'bootstrap/dist/css/bootstrap.min.css';

    class AdminPage extends Component {
    render() {
        return (
            
            <div>
                <div ><Header/></div>      
            <div className="container">
                
                <div className="t"><h3 className="text-center"><br />Admin Page</h3></div>
                <br/><br/>
                    <div className="row">
                        
                        <div className ="col">
                            <div className="row"><label><h5>Requester</h5></label> </div>
                                <br />                
                            <div className="row">
                                <label><input type="checkbox" value="option1"  /> Make Request </label>
                            </div>
                            <div className="row">
                                <label><input type="checkbox" value="option2" /> View Request </label>
                            </div>
                            <div className="row">
                                <label><input type="checkbox" value="option3" /> Tracking Page </label>
                            </div>
                            <div className="row">
                                <label><input type="checkbox" value="option4" /> Dashboard </label>
                            </div>
                        </div>

                        <div className ="col">
                            <div className="row"><label><h5>Approver</h5></label> </div>
                            <br />
                                <div className="row">
                                <label><input type="checkbox" value="option1"  /> Make Request </label>
                                </div>
                                <div className="row">
                                <label><input type="checkbox" value="option2" /> View Request </label>
                                </div>
                                <div className="row">
                                <label><input type="checkbox" value="option3" /> Tracking Page </label>
                                </div>
                                <div className="row">
                                <label><input type="checkbox" value="option4" /> Dashboard </label>
                                </div>

                                <br/><br/><br/>
                                <div className="row">
                                <button className="btn btn-success" >Submit</button>
                                </div>
                        </div>
                        
                        <div className ="col">
                            <div className="row"><label><h5>Senior Management</h5> </label> </div>
                            <br />
                                <div className="row">
                                <label><input type="checkbox" value="option1"  /> Make Request </label>
                                </div>
                                <div className="row">
                                <label><input type="checkbox" value="option2" /> View Request </label>
                                </div>
                                <div className="row">
                                <label><input type="checkbox" value="option3" /> Tracking Page </label>
                                </div>
                                <div className="row">
                                <label><input type="checkbox" value="option4" /> Dashboard </label>
                                </div>
                        </div>
                    </div>
                    
                
            </div>
        </div>
            
        );
    }
    }

    export default AdminPage;