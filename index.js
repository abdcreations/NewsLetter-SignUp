const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    // res.send("this is woring perfectly fine");
    res.sendFile(__dirname + "/index.html")
})

app.post("/",(req,res)=>{
    const firstName = req.body.floatingFirstName;
    const secondName = req.body.floatingSecondName;
    const email = req.body.floatingEmail;

    // const data = {
    //     members: [
    //         {
    //             email_address: email,
    //             status: "subscribed",
    //             merge_fields: {
    //                 FNAME: firstName,
    //                 LNAME: secondName
    //             }

    //     }
    // ]
    // };

    // const jsonData = JSON.stringify(data);

    // const url = "https://us14.api.mailchimp.com/3.0/lists/6e2f9ab5e7.";

    // const options = {
    //     method: "post",
    //     auth: "abd1:17efc400ba8a9af2682f48c6f8544853-us14"
    // }

    // const request = https.request(url,options, function(response){
    //     response.on("data",function(data){
    //         console.log(JSON.parse(data));
    //     })
    // })

    console.log(firstName,secondName,email);



});


app.listen(process.env.PORT || 3000,(req,res)=>{
    console.log("the server is up and running on port 80");

})

// audiance key : 6e2f9ab5e7.;
// 6e2f9ab5e7.

// api key : 17efc400ba8a9af2682f48c6f8544853-us14;