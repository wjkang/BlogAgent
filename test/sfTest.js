"use strict";
var sf = require("../src/sf/doPost");
var http=require("http");
var query = require("querystring");
var server=new http.Server();
server.on('request', function(req, res){
    if(req.method=="POST"){
        var postdata = "";
        req.addListener("data",function(postchunk){
            postdata += postchunk;
        })

        //POST结束输出结果
        req.addListener("end",function(){
            var params = query.parse(postdata);
            console.log(params);
            var postData={
                cookie:params.sfCookies,
                data:{
                    title:"后端自动添加21212",
                    text:params.content,
                    blogId:1200000006808837,
                    tags:params.sfTags.split(",")
                }
            }
            sf.doPost(postData).then(data=> {
                console.log(data);
                res.setHeader('Content-Type', 'text/html');
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.writeHead(200, {'Content-Type': 'text/json'});
                res.end(JSON.stringify(data));
            }).catch(ex=> {
                console.log(ex);
            });
        })
    }
});
server.listen(3000, function(){
    console.log('在端口3000启动了服务器');
});
