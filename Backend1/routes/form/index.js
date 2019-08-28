const router = require('express').Router();
const connection = require('../../db').DbConnect;

router.post('/new',function(req,res){
    var formData = req.body;
    // connection=mysql.DbConnect();
    // console.log("data is: ", formData);
    query="INSERT INTO `requests`(`REQUESTERID_FK`, `CIO_APPROVAL`, `BUSINESS_AREA`, `TEAM`, `REQUESTER`, `RESOURCE_TYPE`, `REQUEST_TYPE`, `DURATION`, `TENURE`, `EX_RE_RE`, `REPLACEMENT_EXIT`, `ROLE_TITLE`, `LOCATION`, `JUSTIFICATION`, `COST_CENTER`, `RUN_CHANGE`, `WITHIN_BUDGET`, `CASE_ALLIGNED`, `LINEMANAGER_ID`, `SUPPLIER`, `PROGRAMME`, `TECHMIS`, `PROJECT_CATEGORY`, `SOW`, `IMPACT`,`CRITICAL_RESOURCE`) VALUES ('"+formData.RequesterID_FK+"','"+formData.CIO_Approval+"','"+formData.Business_Area+"','"+formData.Team+"','"+formData.Requester+"','"+formData.Requester_Type+"','"+formData.Resource_Type+"',"+formData.Duration+","+formData.Tenure+","+formData.Ex_Re_Re+",'"+formData.Replacement_Exit+"','"+formData.Role_Title+"','"+formData.Location+"','"+formData.Justificaton+"','"+formData.Cost_Center+"','"+formData.Run_Change+"','"+formData.Within_Budget+"','"+formData.Case_Alligned+"','"+formData.LineManager_Id+"','"+formData.Supplier+"','"+formData.Programme+"','"+formData.Techmis+"','"+formData.Project_Category+"','"+formData.SOW+"','"+formData.Impact+"','"+formData.Critical_resource+"')";
    console.log(query);
    connection.query(query,function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            return;
        }
        message={
            'message':'Authenticated'
        }
        // message1={
        //     'message':'Not Authenticated'
        // }
    //     if(rows.length) 
    //     res.send(message);
    //     else
        res.send(message);
    });
    // connection.end(function(){
    //     console.log("Connection closed");
    // });
  });  



module.exports = router;