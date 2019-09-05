var express = require('express');
var app = express();
var mongoose = require('mongoose');
var crypto=require("crypto");
var bodyParser = require('body-parser');


var uE=bodyParser.urlencoded({extended:false});
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    next()
})
 let dbcollection = mongoose.model('users',{
                email:String,
                userpass:String,
                username:String

            })

app.post('/reg',uE,function(req,res){
    var email=req.body.email;
    console.log(email);
    mongoose.connect('mongodb://localhost:27017/myapp',{useNewUrlParser:true},function(err){
        if(err){
            console.error('数据库链接失败');
            return
        }else{
            console.log('连接成功')
            // dbs.save().then((ok)=>{
            //     console.log('okokok')
            // },(err)=>{})
        }

    })
    res.send('ok')
})
// app.post('/post',uE,function(req,res){

//     res.send('post')
// })

app.listen(8888);