const express = require('express');

const router = express.Router();

router.get('/login',(req,res,next)=>{
    res.send(`<html><head><title>Enter</title></head><body><form action = "/login" method="POST" onSubmit="localStorage.setItem('Username', document.getElementById('name').value)"><label for = "name">Username</label><input type = "text" id = "name" name="name"><button type="submit">LOGIN</button></form></body></html>`)
});
router.post('/login',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})
module.exports = router;