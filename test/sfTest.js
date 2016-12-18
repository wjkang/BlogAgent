"use strict";
var sf = require("../src/sf/doPost");
var http=require("http");
var query = require("querystring");
var data = {
    cookie:"Hm_lvt_e23800c454aa573c0ccb16b52665ac26=1480042218,1480049341,1480050350,1480056908; sf_remember=585ebc30c1ae3b05a4633c777219f2f4; __jsluid=ee6b8a36e03924b1a60b54e683709183; Hm_lpvt_e23800c454aa573c0ccb16b52665ac26=1480057545; PHPSESSID =web6~ro0cd50592ceiqp65isfimid26",
    data:{
        title:"后端自动添加21212",
        text:"本文章由工具自动发布",
        blogId:1200000006808837,
        tags:[1040000000089436,1040000000089434],

    }

}
/*sf.doPost(config).then(data=> {
    //console.log(data);
}).catch(ex=> {
    //console.log(ex);
});*/
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
