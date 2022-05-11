const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index.ejs');
});
//login
router.get('/login',(req,res)=>{
   res.render('login');
   
});
/* //any other must be on index
router.get('*',(req,res)=>{
   res.end('Not Found')
}); */

module.exports = router;