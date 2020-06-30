const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname,'public')));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');
app.engine('html',require('express-art-template'));

const qt = require('./route/qt');
app.use('/qt',qt);



//监听端口
app.listen(80)
console.log('网站服务器启动成功，请访问localhost/qt/map')