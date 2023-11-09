const express = require('express');

const router = express.Router();
const fs = require('fs');

router.get("/",(req,res,next)=>{
    fs.readFile('message.txt',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            const message = data;
            res.send(`<html><head><title>Enter</title></head><body><form action = "/" method="POST" onSubmit ="document.getElementById('name').value=localStorage.getItem('Username')" ><label for = "msg">Message</label><input type = "text" id = "msg" name="msg"><input type="hidden" id="name" name="name"><button type="submit">Send</button></form><div><pre>${message}</pre></div></body></html>`)
        }
    })
    
})
router.post('/',(req,res,next)=>{
    //console.log(req.body);
    const msg = req.body.name + ": " +req.body.msg;

    fs.appendFile('message.txt',msg + '\n', (err)=>{
        if(err){
            console.log(err.msg);
        }
    });
    res.redirect('/');
})

module.exports = router;