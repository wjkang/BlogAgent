"use strict";
var sf = require("../src/sf/doPost");
var cnblogs=require("../src/cnblogs/cnblogs");
var http=require("http");
var query = require("querystring");
var server=new http.Server();

server.on('request', function(req, res){
    if(req.method=="POST"){
        var postdata = "";
        req.addListener("data",function(postchunk){
            postdata += postchunk;
        });
        req.addListener("end",function(){
            var params = query.parse(postdata);
            console.log(params);
            var postSFData={
                cookie:params.sfCookies,
                data:{
                    title:"后端自动添加21212",
                    text:params.content,
                    blogId:1200000006808837,
                    tags:params.sfTags.split(",")
                }
            };
            var postCNBlogsData={
                __VIEWSTATE:"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",
                __VIEWSTATEGENERATOR:"FE27D343",
                Editor$Edit$txbTitle:"2222",
                Editor$Edit$EditorBody:"222222",
                Editor$Edit$lkbDraft:"保存为草稿"
            };
            cnblogs.postBlog(postCNBlogsData,"username","pwd").then(s=>console.log(s));
            sf.postBlog(postSFData).then(data=> {
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
    console.log('start..');
});
