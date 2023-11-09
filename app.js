const express = require('express');

const router = express.Router();
const server = express();
const bodyParser = require('body-parser');

const loginRoutes = require('./Routes/login');
const msgRoutes = require('./Routes/msg');

server.use(bodyParser.urlencoded({extended:false}));

server.use(loginRoutes);
server.use(msgRoutes);

server.use((req,res,next)=>{
    res.status(404).send("<h1>Page Not Found</h1>");
})



server.listen(4000,()=>{
    console.log("Server is running.")
});