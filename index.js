const express = require('express')
const app = express() //网络框架的实例



app.get('/index',(req,res) =>{ //匿名函数
    return res.send('hello world')
})

app.listen(3000, ()=>{ //端口 监听
    console.log('The server start at port 3000')
})

