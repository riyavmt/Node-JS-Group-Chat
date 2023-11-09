const express = require('express');

const router = express.Router();

router.get("/",(req,res,next)=>{
    res.send('<form action = "/" method="POST"><label for = "msg">Message</label><input type = "text" id = "msg" name="msg"><button type="submit">Send</button></form>')
})
router.post('/',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;