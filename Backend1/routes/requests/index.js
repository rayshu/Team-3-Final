const router = require('express').Router();
const connection = require('../../db').DbConnect;
const moment= require('moment')


// router.post('/approve',function(req,res){
//     var racf=req.body;
//     // console.log("heeyyy")
//     // db.query(`Select * from users where racfid_pk = 'user1' `,function(err,result){
//     //     if(err) console.log(err)
//     //     res.send(result);
//     // })

//     // const user = req.session.user;
//     // var racf=req.body.racf;
//     const user = {racfId : req.body.racf,designation:'BUH'}
//     const caseid = req.params.caseid
//     let reported_to;

//     connection.beginTransaction(function(err){
//         if (err) { throw err; }
//         connection.query(`Select reported_to from reporting_levels where reported_by ="${user.racfId}" ` ,function(err,result){
//             if(err) {
//                 return connection.rollback(function() {
//                     throw error;
//                   });
//             }
//             if(result.length ==0||true){
//                 console.log("This is highest approving level");
    
//                 connection.query(`Insert into status_table values(${caseid},"${user.racfId}","${user.designation}","Approved","Approved",Null,"${moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')}",Null)`,function(err,result){
//                     if(err) {
//                         console.log(err);
//                         return connection.rollback(function() {
//                             throw error;
//                           });
//                     }
//                     connection.query(`Update requests set overall_status = 'Approved' where caseid_pk = `+caseid ,function(err,result){
//                         if(err) {
//                             console.log(err);
//                             return connection.rollback(function() {
//                                 throw error;
//                               });
//                         }
//                         // db.query(`Insert into status_table`)
//                         connection.commit(function(err) {
//                             if (err) {
//                               return connection.rollback(function() {
//                                 throw err;
//                               });
//                             }
//                             console.log('success!');
//                             return res.status(200).send({message:"Success"})
//                           });
                       
//                     })
//                 })
                
                
    
//             }
    
//             // else{
//             //     // console.log(result);'
//             //     reported_to = result[0].reported_to;
//             //     db.query(`select * from users where racfid_pk= "${reported_to}"`,function(err,result){
//             //         reported_to = result[0];
//             //         if(err) console.log(err)
//             //         db.query(`Insert into status_table values(${caseid},"${user.racfId}","${user.designation}","Approved","in-progress",Null,"${moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')}",Null)`,function(err,result){
//             //             if(err) {
//             //                 console.log(err);
//             //                 return db.rollback(function() {
//             //                     throw error;
//             //                   });
//             //             }
//             //             db.query(`Insert into status_table values(${caseid},"${reported_to.racfId}","${reported_to.designation}","in-progress","in-progress",Null,"${moment(Date.now()+1000).format('YYYY-MM-DD HH:mm:ss')}",Null)`,function(err,result){
//             //                 db.commit(function(err) {
//             //                     if (err) {
//             //                       return db.rollback(function() {
//             //                         throw err;
//             //                       });
//             //                     }
//             //                     console.log('success!');
//             //                   });
//             //             })
//             //         })
//             //     })
               
                
    
    
//             // }
//         })


//     })
    

// })
router.post('/approval',function(req,res){
    
    var caseId =req.body.caseId;
    console.log("caseId is " ,caseId);
    var query = "Update requests set overall_status = 'Approved' where caseid_pk = '"+caseId+"'" ;
                connection.query(query ,function(err,result){
                    console.log(query);
                    if(err){
                        console.log("An error ocurred performing the query.");
                        return;
                    } 
                       console.log("Successful");
                       message ={
                           message : 'done'
                       }
                       res.send(message);
                    })
    })
                
                
    
            
    
            
 

router.post('/myRaisedRequests',(req,res)=>{
    // const data = {
    //     racf:req.session.user.racf
    // }

    const arr=[];
    var racf=req.body.racf;
    query = "SELECT * from requests where REQUESTERID_FK='"+racf+"'";
    console.log(query)
    //query = 'SELECT `CASEID_PK`, `REQUESTERID_FK`, `REQUEST_TYPE`, `BUSINESS_AREA`,`TEAM`, `ROLE_TITLE`, `DURATION`,`LINEMANAGER_ID`,`PROJECT_CATEGORY`,`LOCATION`, `OVERALL_STATUS` FROM `requests` WHERE `REQUESTERID_FK'='"+data.racf+"'
    //query = 'SELECT * from users';
    connection.query(query, function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            return;
        }
        for(let k in rows)
        {
            arr.push(rows[k]);
        }
        //console.log(rows.length);
    //     query2 = `select * from  status_table where approver_id = "${racf}"`;
    //     connection.query(query2,function(err,statusRows){
    //     if(err) return console.log(err);
    //     // console.log(result)
    //    for(let i in statusRows){
    //        connection.query(`select * from requests where caseid_pk = ${statusRows[i].CASE_ID}`,function(err,result){
    //            if(err) return console.log(err);
    //            //arr.push(result[0])
    //            console.log(arr)
    //           // if(arr.length==statusRows.length) {
    //             // console.log(arr);
    //            // res.send(arr)
    //           // }
    //         })
     //
    //  }
    console.log(arr);
    res.send(arr);
        
    })
        
    })
    
// })


router.post('/myApprovals',function(req,res){
    var racf=req.body.racf;
    query = `select * from  status_table where approver_id = "${racf}"`;
    connection.query(query,function(err,statusRows){
        if(err) return console.log(err);
        // console.log(result)
       const arr=[];
       for(let i in statusRows){
           connection.query(`select * from requests where caseid_pk = ${statusRows[i].CASE_ID}`,function(err,result){
               if(err) return console.log(err);
               arr.push(result[0])
               console.log(arr)
               if(arr.length==statusRows.length) {
                // console.log(arr);
                res.send(arr)
               }
            })
       }

        
    })
})

router.post('/new',function(req,res){
    var formData = req.body;
    
    query="INSERT INTO `requests`(`REQUESTERID_FK`, `CIO_APPROVAL`, `BUSINESS_AREA`, `TEAM`, `REQUESTER`, `RESOURCE_TYPE`, `REQUEST_TYPE`, `DURATION`, `TENURE`, `EX_RE_RE`, `REPLACEMENT_EXIT`, `ROLE_TITLE`, `LOCATION`, `JUSTIFICATION`, `COST_CENTER`, `RUN_CHANGE`, `WITHIN_BUDGET`, `CASE_ALLIGNED`, `LINEMANAGER_ID`, `SUPPLIER`, `PROGRAMME`, `TECHMIS`, `PROJECT_CATEGORY`, `SOW`, `IMPACT`,`CRITICAL_RESOURCE`) VALUES ('"+formData.RequesterID_FK+"','"+formData.CIO_Approval+"','"+formData.Business_Area+"','"+formData.Team+"','"+formData.Requester+"','"+formData.Requester_Type+"','"+formData.Resource_Type+"',"+formData.Duration+","+formData.Tenure+",'"+formData.Ex_Re_Re+"','"+formData.Replacement_Exit+"','"+formData.Role_Title+"','"+formData.Location+"','"+formData.Justificaton+"','"+formData.Cost_Center+"','"+formData.Run_Change+"','"+formData.Within_Budget+"','"+formData.Case_Alligned+"','"+formData.LineManager_Id+"','"+formData.Supplier+"','"+formData.Programme+"','"+formData.Techmis+"','"+formData.Project_Category+"','"+formData.SOW+"','"+formData.Impact+"','"+formData.Critical_Resource+"')";
    console.log(query);
    connection.query(query,function(err, rows, fields) {
        if(err){
            console.log(err);
            return;
        }

        connection.query(`Select reported_to from reporting_levels where reported_by ="${formData.RequesterID_FK}"`,function(err,result){
            if(err) return console.log(err);
            console.log("result at reporting_levels "+ result[0])
            let reported_to = result[0].reported_to;
            connection.query(`select last_insert_id()`,function(err,result){
                if(err) console.log(err);
                let caseid = result[0]['last_insert_id()']
                console.log(result[0]['last_insert_id()']);
                connection.query(`select * from users where racfid_pk = '${reported_to}'`,function(err,result){
                    if(err) console.log(err);
                    let reported_to_user = result[0];
                    console.log(reported_to_user);
                    connection.query(`INSERT INTO status_table values(${caseid},'${reported_to}','${reported_to_user.DESIGNATION}',"in-progress","in-progress",null,"${moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')}",null)`,function(err,result){
                        if(err) console.log(err);
                        res.send({message:"Success"});
                        console.log(result); 
                    })

                })
                // 
        
            })
            

        })
       
    
    });

  });  



module.exports = router;