import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import express from "express";
import InitWebRouter from "./route/web"

require('dotenv').config()

let app = express()

//config app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
InitWebRouter(app);

let port = process.env.PORT || 6969;

app.listen(port, () => {
    //callback 
    console.log("backend nodejs is running on the port: " + port)
});


