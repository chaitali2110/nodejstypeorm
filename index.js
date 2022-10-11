const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

require("./database/db");
require("dotenv").config();

// app.get("/",(req,res)=>{
//     res.send("Hello world");
// });

const routes = require("./routes/routes");
app.use(routes);


const port = process.env.PORT;

app.listen(port,()=>{
    console.log("Server is listening on port "+port);
});

