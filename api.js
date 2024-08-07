//included the express server
const express=require("express");

//included file systerm. Defalut package comes with node. It is like cerating our own db.
//Storing all data coming with api
const fs=require("fs");

//we have router method in express server.we can get router instance by calling the router method.
//with this router instance, we can create our own api.
const router=express.Router();


//when the user hits on empty path(//localhost:8000/api), then the corresponding message gets printed
router.get("/",(req,res)=>{
    res.send("Hello, from API server");
})

//registration api
//handle the request using router instance and it is post api
//sec parameter is anonymous function having two parameters request and reposne
router.post("/register",(req,res)=>{

    //userdata will have format as {{email:'', password:''}}=> json format
    //all the data sen dfrom front end, form is present in body, we will get the datat using req.body
    const userdata=req.body;

    //need to check whther the user is alrady present or not
    let isUserPresent=false;

    // so we need to read the file using package file system
    //we have to ouse readfile method in file system
    //pass the json file, format and three parameter should be err or data handling
    fs.readFile("data.json", "utf-8", (err, data)=>{
        let dataArr=[];

        //first we have to handle err
        //if there is any err, we will send the error to front end and stop the execution.
        if(err){
            res.send(err);
            return;

        }
    })
    



})

//exporting the routing using module.exports
module.exports=router;