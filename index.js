const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config();

const port  = process.env.PORT;

require("./database/db");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


const routes = require("./routes/routes");

app.use(routes);

app.listen(port,()=>{
    console.log("Server is listening on port "+port);
});