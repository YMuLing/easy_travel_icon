const express = require('express')
const app = express()

// 引入发送请求
const request = require('request')

const http = require('http');
const url = require('url');
// 换取小程序用户凭证
// GET https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code




app.get('/login', (req, res) => {
    // 获取code
    let arg = url.parse(req.url).query;
    let params = arg.split('=')[1]

    // 通过获得的code 发送请求 获取appid
    const user = request(`https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=` + params,
        function(error, response, body) {
            // console.log('------------------------------------------------------------------------------------------------------------------------------------------------------');
            return response
                // console.log(error);
                // console.log(body);
        })　　
    res.send(user)
})

app.listen(3030)
console.log('启动成功');


// 后台发送请求
// //1. Install
// npm install --save request
// //2. back-end
// var request = require('request');
// request('http://www.example.com/create?account=user&sign', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body)
//   }
// })　　