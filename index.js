const express = require('express');
const router  = express.Router();
//login 
router.get('/', (req,res)=>{
    res.render('welcome');
})
//register
router.get('/register', (req,res)=>{
    res.render('register');
})

module.exports = router; 