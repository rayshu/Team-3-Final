import React from 'react';
import downloadFile  from './Template.xlsx';
import Header from './Header';
// import Footer from './Footer';
import { Link } from 'react-router-dom';

export class Download extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                            <div className="col"><Header /></div>
                </div>
                {/* Label 1 */}
               <h1 className="text-primary text-center" id="requestlabel"><b>Make a Request</b></h1>


                {/* Label 2 */}
               <div className="text-center" id="downdexcel" >
                  <a href={downloadFile} download="Excel_Template">
                    <button type="button" className="btn btn-primary" 
                    data-toggle="tooltip" data-placement="top" 
                    title="Download this template to upload request in excel format" id="downloadButton">
                        Download Excel Template
                    </button>
                   </a>
                    
                    <br></br>

                     <div className="card">
                        <form action="myForm">
                            <label id="uploadFile">Upload your File:</label>
                                <input type="file" className="fileupload" id="fileupload"></input>
                                <button type="submit" className=" btn btn-success">Submit</button>
                        </form>
                    </div>  

                </div>

                {/* Label 3 */}
                <div className="text-center">
                    <h3 className = "text-center text-primary" id="or">OR</h3>
                    
                    <Link to="/form">
                        <button type="button" className="btn btn-primary" data-container="body">
                            Fill Request Form Online
                        </button>
                    </Link>
                 
                </div>

            </div>

        );
    }
}


export default Download;