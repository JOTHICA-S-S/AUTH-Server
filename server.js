const express = require("express");
const bp = require ("body-parser");
//importing the api.js file and creating the instance of it
const api=require("./api");


//default port
const PORT=8000;


//initiing express server by calling express method and stored it in const APP
//express is a server
const APP= express();

//bodyparser is a middleware which transforms the data in the required format. When we send data from UI, it sends to db. Before sending to DB, there comes a server which takes care of the format.
//We are asking the server to convert the data into json format.
APP.use(bp.json());

//including api.js in server instance
APP.use("/api",api);

APP.get("/",(req, res)=>{
    res.send("Helo server!");
})

//we have to listen to the server that is running
//the second parameter(anonymous function) is optional to log the port info in the console
APP.listen(PORT,()=>{
    console.log(`Server is running in port: ${PORT}`);
});


//in backend there may be several api,those apis should be handled in seperate api.js file - it is a good practice