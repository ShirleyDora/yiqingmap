const express = require('express');
const qt = express.Router();
qt.get('/map',(req, res)=>{
    res.render('qt/map');
});
qt.get('/tr-simple1',(req, res)=>{
    res.render('qt/tr-simple1');
});
qt.get('/tr-simple2',(req, res)=>{
    res.render('qt/tr-simple2');
});
qt.get('/tr-simple3',(req, res)=>{
    res.render('qt/tr-simple3');
});
qt.get('/',(req, res)=>{
    res.render('qt/index');
});
module.exports = qt;
